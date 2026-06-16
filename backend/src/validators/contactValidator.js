const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 10000;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateContact = ({
    name,
    email,
    message,
}) => {

    if (typeof name !== "string") {
        return "Invalid name format.";
    }

    if (typeof email !== "string") {
        return "Invalid email format.";
    }

    if (typeof message !== "string") {
        return "Invalid message format.";
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
        return "Please enter your name so I know who I'm talking to.";
    }

    if (trimmedName.length > MAX_NAME_LENGTH) {
        return "Your name is too long.";
    }

    if (!trimmedEmail) {
        return "Please provide an email address where I can reach you.";
    }

    if (trimmedEmail.length > MAX_EMAIL_LENGTH) {
        return "Email address is too long.";
    }

    if (!emailRegex.test(trimmedEmail)) {
        return "That email format doesn't look quite right. Please check for typos.";
    }

    if (!trimmedMessage) {
        return "Please type a message before sending.";
    }

    if (trimmedMessage.length < MESSAGE_MIN_LENGTH) {
        return `Please write at least ${MESSAGE_MIN_LENGTH} characters.`;
    }

    if (trimmedMessage.length > MESSAGE_MAX_LENGTH) {
        return `Your message is too long. Maximum ${MESSAGE_MAX_LENGTH} characters.`;
    }

    return null;
};