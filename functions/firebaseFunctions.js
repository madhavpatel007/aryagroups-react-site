const {onRequest} = require("firebase-functions/v2/https");
import nodemailer from 'nodemailer';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendEmail = functions.https.onRequest(async (req, res) => {
  try {
    const emailObj=req.body
    // Create a Nodemailer transporter using your email provider's configuration
    const transporter = nodemailer.createTransport({
      service: process.env.REACT_APP_SMTP_SERVICE,
      auth: {
        user: process.env.REACT_APP_SMTP_EMAIL,
        pass: process.env.REACT_APP_SMTP_PASSWORD,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: emailObj.from,
      to: emailObj.to,
      subject: emailObj.subject,
      text: emailObj.text,
    });

    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email.');
  }
});
