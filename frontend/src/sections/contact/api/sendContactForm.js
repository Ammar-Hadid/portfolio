const getContactFormUrl = () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    if (!apiUrl) {
        throw new Error("Missing VITE_API_URL environment variable.");
    }

    return `${apiUrl.replace(/\/+$/, "")}/contact/form`;
}

export const sendContactForm = async (formData) => {

    const res = await fetch(getContactFormUrl(), {
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
