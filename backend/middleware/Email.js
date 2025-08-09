import  transporter from  '../middleware/Email.confiq.js';
import { Verification_Email_Template } from './EmailTemplate.js';
export  const SendVerificationCode = async (email,verficationCode) => {
    try { 
    const response = await transporter.sendMail({
    from: '"NEwCoDer" <shahabdad50@gmail.com>',
    to: email,
    subject: "Verify Your Email ",
    text: "Verify Your Email", // plain‑text body
    html: Verification_Email_Template.replace("{verificationCode}",verificationCode), // HTML body
  });

  console.log("Email send successfully ",response);
} catch (error) { 
        console.log("Email error",error )
    }
}