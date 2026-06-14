import resend from "../config/resend.js";

export const sendContactEmail = async ({ name, email, message }) => {
    const response = await resend.emails.send({
        from: 'Portfolio <portfolio@send.ammarhadid.com>',
        to: process.env.CONTACT_EMAIL,
        subject: 'New Portfolio Form Submission',
        html:
            `
        <h2>New Portfolio Form Submission</h2>

        <hr>

        <p>
            <strong>Name:</strong>
            ${name}
        </p>

        <p>
            <strong>Email:</strong>
            ${email}
        </p>

        <p>
            <strong>Message:</strong>
            ${message}
        </p>
        `
    })

    return response
}