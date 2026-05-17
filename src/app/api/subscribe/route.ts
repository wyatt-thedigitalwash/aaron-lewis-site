import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, firstName, lastName, zipCode, country } = await request.json();

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
            MMERGE12: country || "",
            MMERGE9: "aaronlewismusic.com",
          },
        }),
      }
    );

    const data = await res.json();

    if (res.ok) {
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
