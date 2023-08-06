const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'mail.postale.io',
  port: 587,
  secure: false,
  auth: {
    user: 'info@e-rent.rs',
    pass: 'FMDcwoXMLuCX',
  },
});

const sendEmail = async (payload) => {
  try {
    await transporter.sendMail(payload);
  } catch (error) {
    console.log(error);
  }
};

const createResetLink = (token) => {
  return `http://localhost:5173/reset?token=${token}`;
};

const sendEmailRequest = async (email, token) => {
  const resetLink = createResetLink(token);

  const emailBody = {
    from: 'info@e-rent.rs',
    to: email,
    subject: 'Reset password',
    text: `Click on link to reset password.. ${resetLink}`,
  };

  await sendEmail(emailBody);
};

module.exports = {
  sendEmail,
  sendEmailRequest,
  createResetLink,
};
