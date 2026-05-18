import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { password } = await request.json();
  const staging = process.env.STAGING_PASSWORD;

  if (!staging || password !== staging) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set("staging_auth", password, {
    httpOnly: true,
    path: "/",
    maxAge: 604800,
  });

  return res;
}
