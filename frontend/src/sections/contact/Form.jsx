import { useState } from "react";
import { Loader2, Send } from "lucide-react";

import Button from "../../components/ui/Button.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import validateForm from "./validators/validateForm.js";
import { useToast } from "../../contexts/useToast.js";

const INITIAL_FORM_DATA = {
    name: '',
    email: '',
    message: ''
}

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [isSubmitting, setIsSubmitting] = useState(false);
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

        setIsSubmitting(true);
        const success = await onSubmit(formData);
        setIsSubmitting(false);

        if (success) {
            setFormData(INITIAL_FORM_DATA);
        }
    }

    const labelStyles = 'flex flex-col gap-sm text-body-sm font-medium text-text';
    const inputStyles = 'block w-full min-w-0 rounded-xl border border-white/10 bg-bg/60 px-lg py-md font-body text-body font-normal text-text outline-none transition-[border-color,box-shadow] placeholder:text-text/35 focus:border-primary focus:shadow-[0_0_0_4px_rgba(113,70,247,.2)]';

    return (
        <Reveal delay={.1}>
            <form
                noValidate
                onSubmit={handleOnSubmit}
                className="glass flex flex-col gap-lg rounded-card p-lg sm:p-xl"
            >
                <div className="grid gap-lg sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <label className={labelStyles}>
                        Name
                        <input
                            type="text"
                            placeholder="Jane Smith"
                            name="name"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleOnChange}
                            className={inputStyles}
                        />
                    </label>

                    <label className={labelStyles}>
                        Email
                        <input
                            type="email"
                            placeholder="jane@company.com"
                            name="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleOnChange}
                            className={inputStyles}
                        />
                    </label>
                </div>

                <label className={labelStyles}>
                    Project details
                    <textarea
                        name="message"
                        placeholder="What are you building, what's your timeline, and roughly what's your budget?"
                        rows={6}
                        value={formData.message}
                        onChange={handleOnChange}
                        className={`${inputStyles} textarea-no-x-scroll resize-none`}
                    />
                </label>

                <Button type="submit" disabled={isSubmitting} icon={isSubmitting ? undefined : Send} className="w-full">
                    {isSubmitting && <Loader2 className="size-4 animate-spin" />}
                    {isSubmitting ? 'Sending…' : 'Send message'}
                </Button>

                <p className="text-center text-xs text-text-muted">
                    No spam, no commitment. Your details stay private.
                </p>
            </form>
        </Reveal>
    )
}

export default Form;
