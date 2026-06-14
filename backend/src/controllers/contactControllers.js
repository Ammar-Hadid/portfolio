import { validateContact } from "../validators/contactValidator.js";
import { sendContactEmail } from "../services/sendContactEmail.js";

export const sendContactController = async (req, res) => {

    const error = validateContact(req.body);

    if (error) {
        return res.status(400).json({
            success: false,
            message: error
        });
    }

    try {
        await sendContactEmail(req.body);

        return res.status(200).json({
            success: true
        })
    }

    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Server error.'
        })
    }
}