const validateForm = (formData) => {

    if (!formData?.name) {
        return "Name is required.";
    }

    if (!formData?.email) {
        return "Email is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        return "Please enter a valid email.";
    }

    if (!formData?.message) {
        return "Message is required.";
    }

    return null;
}

export default validateForm;