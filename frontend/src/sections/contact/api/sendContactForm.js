const API_URL = `${import.meta.env.VITE_API_URL}/contact/form`;

export const sendContactForm = async (formData) => {

    const res = await fetch(API_URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });

    const data = await res.json();

    return {
        ok: res.ok,
        status: res.status,
        data
    };

} 