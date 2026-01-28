export const confirmationEmailTemplate = (appointmentData: {
  name: string;
  service: string;
  date: string;
  time: string;
}) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Appointment Confirmed</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Your healing session is scheduled</p>
      </div>
      
      <div style="background: white; padding: 40px 20px; border: 1px solid #e5e7eb;">
        <p style="margin: 0 0 20px 0; font-size: 16px;">Dear ${appointmentData.name},</p>
        
        <p style="margin: 0 0 30px 0; color: #666; line-height: 1.6;">
          Thank you for booking with ReikiThreads Foundation. Your appointment has been confirmed!
        </p>
        
        <div style="background: #f3f4f6; padding: 20px; border-left: 4px solid #fbbf24; margin: 30px 0;">
          <p style="margin: 0 0 10px 0; font-weight: bold; color: #1f2937;">Appointment Details:</p>
          <p style="margin: 5px 0; color: #666;"><strong>Service:</strong> ${appointmentData.service}</p>
          <p style="margin: 5px 0; color: #666;"><strong>Date:</strong> ${appointmentData.date}</p>
          <p style="margin: 5px 0; color: #666;"><strong>Time:</strong> ${appointmentData.time}</p>
        </div>
        
        <p style="margin: 20px 0; color: #666; line-height: 1.6;">
          You will receive a reminder email 24 hours before your session. If you need to reschedule or cancel, please contact us as soon as possible.
        </p>
        
        <p style="margin: 20px 0; color: #666;">
          We look forward to your healing journey with us.
        </p>
        
        <p style="margin: 30px 0 0 0; color: #666;">
          Warm regards,<br>
          <strong>ReikiThreads Foundation</strong><br>
          <a href="mailto:hello@reikithreads.com" style="color: #059669; text-decoration: none;">hello@reikithreads.com</a>
        </p>
      </div>
      
      <div style="background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #999; border-radius: 0 0 10px 10px;">
        <p style="margin: 0;">© ${new Date().getFullYear()} ReikiThreads Foundation. All rights reserved.</p>
        <p style="margin: 5px 0 0 0;">
          <a href="https://reikithreads.com/disclaimer" style="color: #059669; text-decoration: none;">Disclaimer</a> | 
          <a href="https://reikithreads.com/privacy" style="color: #059669; text-decoration: none;">Privacy Policy</a>
        </p>
      </div>
    </div>
  `;
};

export const reminderEmailTemplate = (appointmentData: {
  name: string;
  service: string;
  date: string;
  time: string;
}) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Appointment Reminder</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Your healing session is tomorrow</p>
      </div>
      
      <div style="background: white; padding: 40px 20px; border: 1px solid #e5e7eb;">
        <p style="margin: 0 0 20px 0; font-size: 16px;">Dear ${appointmentData.name},</p>
        
        <p style="margin: 0 0 30px 0; color: #666; line-height: 1.6;">
          This is a gentle reminder that your healing session with ReikiThreads Foundation is scheduled for tomorrow.
        </p>
        
        <div style="background: #f3f4f6; padding: 20px; border-left: 4px solid #fbbf24; margin: 30px 0;">
          <p style="margin: 0 0 10px 0; font-weight: bold; color: #1f2937;">Session Details:</p>
          <p style="margin: 5px 0; color: #666;"><strong>Service:</strong> ${appointmentData.service}</p>
          <p style="margin: 5px 0; color: #666;"><strong>Time:</strong> ${appointmentData.time}</p>
        </div>
        
        <p style="margin: 20px 0; color: #666; line-height: 1.6;">
          <strong>Preparation Tips:</strong><br>
          • Find a quiet, comfortable space<br>
          • Wear loose, comfortable clothing<br>
          • Have water ready after the session<br>
          • Set aside time to rest afterwards
        </p>
        
        <p style="margin: 20px 0 0 0; color: #666;">
          Looking forward to seeing you tomorrow!
        </p>
      </div>
      
      <div style="background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #999; border-radius: 0 0 10px 10px;">
        <p style="margin: 0;">© ${new Date().getFullYear()} ReikiThreads Foundation. All rights reserved.</p>
      </div>
    </div>
  `;
};

export const cancellationEmailTemplate = (appointmentData: {
  name: string;
  service: string;
  date: string;
  time: string;
  cancellationReason?: string;
}) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Appointment Cancelled</h1>
      </div>
      
      <div style="background: white; padding: 40px 20px; border: 1px solid #e5e7eb;">
        <p style="margin: 0 0 20px 0; font-size: 16px;">Dear ${appointmentData.name},</p>
        
        <p style="margin: 0 0 30px 0; color: #666; line-height: 1.6;">
          We are writing to confirm that your appointment has been cancelled.
        </p>
        
        <div style="background: #f3f4f6; padding: 20px; border-left: 4px solid #ef4444; margin: 30px 0;">
          <p style="margin: 0 0 10px 0; font-weight: bold; color: #1f2937;">Cancelled Appointment:</p>
          <p style="margin: 5px 0; color: #666;"><strong>Service:</strong> ${appointmentData.service}</p>
          <p style="margin: 5px 0; color: #666;"><strong>Date:</strong> ${appointmentData.date}</p>
          <p style="margin: 5px 0; color: #666;"><strong>Time:</strong> ${appointmentData.time}</p>
          ${appointmentData.cancellationReason ? `<p style="margin: 15px 0 0 0; color: #666;"><strong>Reason:</strong> ${appointmentData.cancellationReason}</p>` : ''}
        </div>
        
        <p style="margin: 20px 0; color: #666; line-height: 1.6;">
          We understand that plans change. If you would like to reschedule your appointment, please contact us and we'll be happy to help.
        </p>
        
        <p style="margin: 20px 0 0 0; color: #666;">
          Best regards,<br>
          <strong>ReikiThreads Foundation</strong><br>
          <a href="mailto:hello@reikithreads.com" style="color: #059669; text-decoration: none;">hello@reikithreads.com</a>
        </p>
      </div>
      
      <div style="background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #999; border-radius: 0 0 10px 10px;">
        <p style="margin: 0;">© ${new Date().getFullYear()} ReikiThreads Foundation. All rights reserved.</p>
      </div>
    </div>
  `;
};

export const replyEmailTemplate = (replyData: {
  name: string;
  subject: string;
  message: string;
}) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">We've Replied to Your Message</h1>
      </div>
      
      <div style="background: white; padding: 40px 20px; border: 1px solid #e5e7eb;">
        <p style="margin: 0 0 20px 0; font-size: 16px;">Dear ${replyData.name},</p>
        
        <p style="margin: 0 0 30px 0; color: #666; line-height: 1.6;">
          Thank you for contacting ReikiThreads Foundation. We've reviewed your inquiry and here is our response:
        </p>
        
        <div style="background: #f3f4f6; padding: 20px; border-left: 4px solid #fbbf24; margin: 30px 0;">
          <p style="margin: 0 0 10px 0; font-weight: bold; color: #1f2937;">Your Subject:</p>
          <p style="margin: 0; color: #666;">${replyData.subject}</p>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="margin: 0 0 10px 0; font-weight: bold; color: #1f2937;">Our Reply:</p>
          <div style="color: #666; line-height: 1.6; white-space: pre-wrap;">${replyData.message}</div>
        </div>
        
        <p style="margin: 20px 0; color: #666; line-height: 1.6;">
          If you have any further questions or need clarification, please don't hesitate to reach out.
        </p>
        
        <p style="margin: 20px 0 0 0; color: #666;">
          Warm regards,<br>
          <strong>ReikiThreads Foundation Team</strong><br>
          <a href="mailto:hello@reikithreads.com" style="color: #059669; text-decoration: none;">hello@reikithreads.com</a>
        </p>
      </div>
      
      <div style="background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #999; border-radius: 0 0 10px 10px;">
        <p style="margin: 0;">© ${new Date().getFullYear()} ReikiThreads Foundation. All rights reserved.</p>
        <p style="margin: 5px 0 0 0;">
          <a href="https://reikithreads.com/disclaimer" style="color: #059669; text-decoration: none;">Disclaimer</a> | 
          <a href="https://reikithreads.com/privacy" style="color: #059669; text-decoration: none;">Privacy Policy</a>
        </p>
      </div>
    </div>
  `;
};
