import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { type, payload } = req.body;

  try {
    if (type === "bank") {
      const {
        accountName,
        bankName,
        accountNumber,
        swiftCode,
        iban,
        currency,
        country,
      } = payload;

      await resend.emails.send({
        from: "EchoLAB™ <no-reply@echolab.ai>",
        to: process.env.ADMIN_EMAIL,
        subject: "🔥 New Bank Transfer Submission",
        text: `
Account Name: ${accountName}
Bank Name: ${bankName}
Account Number: ${accountNumber}
IBAN: ${iban}
SWIFT Code: ${swiftCode}
Currency: ${currency}
Country: ${country}
        `,
      });
    }

    if (type === "support") {
      const { name, email, rtcCode, subject, message } = payload;

      await resend.emails.send({
        from: "EchoLAB™ <no-reply@echolab.ai>",
        to: process.env.ADMIN_EMAIL,
        subject: "🔐 New Encrypted Support Inquiry",
        text: `
Name/Alias: ${name || "Anonymous"}
Email: ${email}
RTC Code: ${rtcCode || "Not provided"}
Subject: ${subject}
Message:
${message}

🛡️ This inquiry was submitted via encrypted channel.
        `,
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
