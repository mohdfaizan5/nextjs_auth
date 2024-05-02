import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "api",
    pass: "c7298d68d00576194706b1f08fc903b3",
  },
});

interface sendMailProps {
  to: string;
  subject: string;
  message: string;
}

export const sendMail = async ({ to, subject, message }: sendMailProps) => {
  const mailOption = {
    from: "faizan@us.com",
    to: to,
    subject,
    html: message,
  };

  const info = await transport.sendMail(mailOption);

  console.log("Message sent: %s", info.messageId);
};
