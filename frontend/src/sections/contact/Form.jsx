import { useState } from "react";

import DefaultButton from "../../components/defaultButton.jsx";
import validateForm from "./validators/validateForm.js";
import { useToast } from "../../contexts/ToastContext.jsx";

import { motion } from "motion/react";
import { slideFromRight } from "../../animations/slideFromRight.js";

const INITIAL_FORM_DATA = {
    name: '',
    email: '',
    message: ''
}

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const { showToast } = useToast();

    const handleOnChange = (e) => {
        if (!e?.target) return;

        const { value, name } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const error = validateForm(formData);

        if (error) {
            showToast(error, 'danger')
            return
        }

        const success = await onSubmit(formData);

        if (success) {
            setFormData(INITIAL_FORM_DATA);
        }
    }

    const inputStyles = 'block w-full min-w-0 max-w-full box-border font-body text-text bg-card-bg py-md px-lg border border-text/10 rounded-md text-body outline-0 focus:border-text/25 placeholder:font-body placeholder:text-text-muted';

    return (
        <motion.form
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: .2
            }}

            noValidate
            onSubmit={handleOnSubmit}
            className="bg-card-bg w-full min-w-0 flex flex-col gap-lg border border-text/15 rounded-2xl p-xl lg:w-auto lg:min-w-[30dvw]"
        >
            <h3 className="font-body text-h3 uppercase">
                <span className="text-text">Say </span>
                <span className="text-primary">Hello</span>
            </h3>

            <div className="flex flex-col gap-md">
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleOnChange}
                    className={`${inputStyles}`}
                />

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleOnChange}
                    className={`${inputStyles}`}
                />

                <textarea
                    name="message"
                    placeholder="Message"
                    cols={1}
                    rows={6}
                    value={formData.message}
                    onChange={handleOnChange}
                    className={`${inputStyles} resize-none appearance-none overflow-x-hidden overflow-y-auto whitespace-pre-wrap wrap-break-words`}
                />
            </div>

            <DefaultButton type="submit" >
                Send
            </DefaultButton>
        </motion.form>
    )
}

export default Form;
