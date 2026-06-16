const validateForm = ({ name, email, message }) => {

    if (typeof name !== "string") {
        return "Invalid name format.";
    }

    const trimmedName = name.trim();

    if (!trimmedName) {
        return "Please enter your name so I know who I'm talking to.";
    }

    if (trimmedName.length > 100) {
        return "Your name is too long.";
    }

    if (typeof email !== "string") {
        return "Invalid email format.";
    }

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
        return "Please provide an email address where I can reach you.";
    }

    if (trimmedEmail.length > 254) {
        return "Email address is too long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
        return "That email format doesn't look quite right. Please check for typos.";
    }

    if (typeof message !== "string") {
        return "Invalid message format.";
    }

    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
        return "Please type a message before sending.";
    }

    const MESSAGE_MIN_LENGTH = 10;
    const MESSAGE_MAX_LENGTH = 10000;

    if (trimmedMessage.length < MESSAGE_MIN_LENGTH) {
        return `Please write at least ${MESSAGE_MIN_LENGTH} characters.`;
    }

    if (trimmedMessage.length > MESSAGE_MAX_LENGTH) {
        return `Your message is too long. Maximum ${MESSAGE_MAX_LENGTH} characters.`;
    }

    return null;
};

export default validateForm;