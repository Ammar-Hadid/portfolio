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
        return "Name is required.";
    }

    if (trimmedName.length > MAX_NAME_LENGTH) {
        return "Name is too long.";
    }

    if (!trimmedEmail) {
        return "Email is required.";
    }

    if (
        !emailRegex.test(trimmedEmail) ||
        trimmedEmail.length > MAX_EMAIL_LENGTH
    ) {
        return "Invalid email address.";
    }

    if (!trimmedMessage) {
        return "Message is required.";
    }

    if (
        trimmedMessage.length < MESSAGE_MIN_LENGTH ||
        trimmedMessage.length > MESSAGE_MAX_LENGTH
    ) {
        return "Invalid message length.";
    }

    return null;
};