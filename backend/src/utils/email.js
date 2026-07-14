

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    jsonTransport: true
});

export const sendEmail = async (options) => {
    return await transporter.sendMail({
        from: "music-events@example.com",
        to: options.to,
        subject: options.subject,
        html: options.html
    })
}