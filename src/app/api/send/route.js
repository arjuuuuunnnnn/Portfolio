import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend('re_4uQ5Qt6D_3KL8EXDtX6PxSMUNBGpEbhhw');
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  // const {body} = await req.json();
  const {email, subject, message} = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: email,
      to: ['arjunbanur27@gmail.com'],
      // to: [fromEmail, email],
      subject: subject,
      react: (
      <>
        <h1>{subject}</h1>
        <p>Thank you for contacting</p>
        <p>New message submitted:</p>
        <p>{message}</p>
      </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

// export default function handler(req, res){
//   res.status(200).json({name:'hemanth'})
// }