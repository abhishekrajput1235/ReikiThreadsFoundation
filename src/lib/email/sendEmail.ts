import nodemailer from 'nodemailer';

// Create transporter (configure with your email service)
const createTransporter = () => {
  // Using Gmail as example - change to your email service
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Alternative for custom SMTP:
  // return nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: parseInt(process.env.SMTP_PORT || '587'),
  //   secure: process.env.SMTP_SECURE === 'true',
  //   auth: {
  //     user: process.env.SMTP_USER,
  //     pass: process.env.SMTP_PASS,
  //   },
  // });
};

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail(options: EmailOptions) {
  try {
    const transporter = createTransporter();
    const mailOptions = {
      from: options.from || process.env.SMTP_FROM || 'noreply@reikithreads.com',
      to: options.to,
      subject: options.subject,
      html: options.html,
    };

    const result = await transporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function sendBulkEmails(emails: EmailOptions[]) {
  const results = await Promise.all(
    emails.map((email) => sendEmail(email))
  );
  return results;
}
