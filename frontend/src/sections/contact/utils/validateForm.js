const validateForm = (formData) => {

    if (!formData?.name) {
        return "Please enter your name so I know who I'm talking to.";
    }

    if (!formData?.email) {
        return "Please provide an email address where I can reach you.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        return "That email format doesn't look quite right. Please check for typos.";
    }

    if (!formData?.message) {
        return "Please type a message before sending.";
    }

    return null;
}

export default validateForm;