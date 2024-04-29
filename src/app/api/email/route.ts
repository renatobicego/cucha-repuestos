import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const resend = new Resend(process.env.RESEND_APIKEY);

    resend.emails.send({
      from: 'dutsiland@gmail.com',
      to: 'renatobicego@gmail.com',
      subject: 'Hello World',
      html: `${body.name}`
    });
    return NextResponse.json({ message: "Petición Enviada" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
