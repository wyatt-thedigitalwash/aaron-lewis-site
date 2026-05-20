import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, firstName, lastName, zipCode, phone, country } = await request.json();

  if (!email) {
    return NextResponse.json(
      { success: false, error: "Email is required" },
      { status: 400 }
    );
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const SERVER = process.env.MAILCHIMP_SERVER_PREFIX;
  const AUDIENCE = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!API_KEY || !SERVER || !AUDIENCE) {
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from("anystring:" + API_KEY).toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          tags: ["Aaron Lewis"],
          merge_fields: {
            FNAME: firstName || "",
            LNAME: lastName || "",
            MMERGE14: zipCode || "",
            PHONE: phone || "",
            MMERGE12: country || "",
            MMERGE9: "aaronlewismusic.com",
          },
        }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      // Laylo subscription (secondary — failures don't affect user response)
      const LAYLO_KEY = process.env.LAYLO_API_KEY;
      if (LAYLO_KEY) {
        // Call 1: email
        try {
          await fetch("https://laylo.com/api/graphql", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${LAYLO_KEY}`,
            },
            body: JSON.stringify({
              query: "mutation($email: String) { subscribeToUser(email: $email) }",
              variables: { email },
            }),
          });
        } catch (err) {
          console.error("Laylo email error:", err);
        }

        // Call 2: phone (only if provided)
        if (phone) {
          try {
            const digits = phone.replace(/\D/g, "");
            const formatted = digits.startsWith("1") ? `+${digits}` : `+1${digits}`;
            await fetch("https://laylo.com/api/graphql", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${LAYLO_KEY}`,
              },
              body: JSON.stringify({
                query: "mutation($phoneNumber: String) { subscribeToUser(phoneNumber: $phoneNumber) }",
                variables: { phoneNumber: formatted },
              }),
            });
          } catch (err) {
            console.error("Laylo phone error:", err);
          }
        }
      }

      return NextResponse.json({ success: true });
    }

    if (res.status === 400 && data.title === "Member Exists") {
      return NextResponse.json(
        { success: false, error: "already_subscribed" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
