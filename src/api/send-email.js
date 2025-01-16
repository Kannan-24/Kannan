import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure the email transporter using environment variables
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Set in Vercel environment variables
    pass: process.env.EMAIL_PASS, // Set in Vercel environment variables
  },
});

// Handle the incoming POST request from the contact form
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Send email to the admin
  const mailOptionsAdmin = {
    from: email, // Sender's email (from the contact form)
    to: process.env.ADMIN_EMAIL, // Admin's email (set in environment variables)
    subject: `New message from ${name}`,
    html: `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #2c3e50;">New Message from ${name}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p style="background-color: #ecf0f1; padding: 10px; border-radius: 5px;">${message}</p>
      <hr />
      <p style="font-size: 12px; color: #7f8c8d;">This message was sent via your website's contact form.</p>
    </div>
  `,
  };

  // Send confirmation email to the user
  const mailOptionsUser = {
    from: process.env.EMAIL_USER, // Your email
    to: email, // User's email
    subject: "Thank you for your message!",
    html: `
    <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333;">
      <div style="background-color: #2c3e50; color: white; padding: 10px; border-radius: 5px;">
        <h2 style="margin: 0;">Thank you for your message, ${name}!</h2>
      </div>
      <p style="font-size: 16px; margin-top: 20px;">Hello ${name},</p>
      <p style="font-size: 16px;">Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
      <p style="font-size: 16px; font-weight: bold;">Your message:</p>
      <p style="background-color: #ecf0f1; padding: 10px; border-radius: 5px; font-style: italic;">${message}</p>
      <p style="font-size: 16px;">We appreciate your interest in our services!</p>
      <p style="font-size: 16px;">Best regards,<br>Kannan M</p>
      <hr />
      <p style="font-size: 12px; color: #7f8c8d;">This is an automated confirmation message.</p>
    </div>
  `,
  };

  // Send the email to the admin
  transporter.sendMail(mailOptionsAdmin, (error) => {
    if (error) {
      return res.json({
        success: false,
        message: "Error sending email to admin. Please try again later.",
      });
    }

    // After sending the email to the admin, send the confirmation to the user
    transporter.sendMail(mailOptionsUser, (error) => {
      if (error) {
        return res.json({
          success: false,
          message:
            "Error sending confirmation email to user. Please try again later.",
        });
      }

      // Respond with success
      res.json({
        success: true,
        message: "Message sent successfully and confirmation email sent!",
      });
    });
  });
});

// Start the server (this will run on Vercel)
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
