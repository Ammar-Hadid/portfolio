import { Clock, FileCheck2, ShieldCheck } from "lucide-react";

import SOCIAL_LINKS from "../../constants/socialLinks.js";

import Section from "../../components/layout/Section.jsx";
import Reveal from "../../components/ui/Reveal.jsx";
import Eyebrow from "../../components/ui/Eyebrow.jsx";

import Form from "./Form.jsx";
import SocialItem from "./SocialItem.jsx";

import { sendContactForm } from "./api/sendContactForm.js";
import { useToast } from "../../contexts/useToast.js";

const PROMISES = [
    { icon: Clock, label: "Reply within 24–48 hours" },
    { icon: FileCheck2, label: "Free, no-obligation estimate" },
    { icon: ShieldCheck, label: "Clear scope, timeline and price upfront" },
];

const Contact = () => {
    const { showToast } = useToast();

    const handleFormSubmit = async (formData) => {
        try {
            const response = await sendContactForm(formData);

            if (response.status === 400) {
                showToast(response.data.message, "danger");
                return;
            }

            if (!response.ok) {
                showToast(response?.data?.message || 'Message failed to send. Please try again.', 'danger');
                return;
            }

            if (response?.data?.success) {
                showToast('Message sent! Expect a response within 24–48 hours.', 'success');
                return true;
            }
        }

        catch (error) {
            showToast(error?.message || 'Message failed to send. Please try again.', 'danger')
        }
    }

    return (
        <Section id="contact">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card-bg/60 p-lg backdrop-blur-xl sm:p-2xl lg:p-3xl">
                <div aria-hidden className="absolute -left-1/4 -top-1/2 h-[120%] w-[80%] rounded-full bg-primary/25 blur-[120px]" />
                <div aria-hidden className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />

                <div className="relative grid gap-2xl lg:grid-cols-2 lg:gap-3xl">
                    <Reveal className="flex flex-col items-start gap-xl">
                        <div className="flex flex-col items-start gap-md">
                            <Eyebrow>Get in touch</Eyebrow>
                            <h2 className="font-display text-h2 font-semibold leading-[1.1] tracking-tight text-balance">
                                Have a project in mind? <span className="text-gradient">Let's build it.</span>
                            </h2>
                            <p className="text-body-lg leading-relaxed text-text-muted text-pretty">
                                Tell me about your idea, goals and timeline. I'll reply with clear next steps and an honest estimate.
                            </p>
                        </div>

                        <ul className="flex flex-col gap-md">
                            {PROMISES.map(({ icon: Icon, label }) => (
                                <li key={label} className="flex items-center gap-md text-body text-text">
                                    <span className="grid size-9 place-items-center rounded-xl bg-primary/15 text-primary-light ring-1 ring-primary/30">
                                        <Icon className="size-4" />
                                    </span>
                                    {label}
                                </li>
                            ))}
                        </ul>

                        {SOCIAL_LINKS?.length > 0 && (
                            <div className="flex w-full flex-col gap-sm border-t border-white/10 pt-xl">
                                {SOCIAL_LINKS.map(social => (
                                    <SocialItem key={social.id} social={social} />
                                ))}
                            </div>
                        )}
                    </Reveal>

                    <Form onSubmit={handleFormSubmit} />
                </div>
            </div>
        </Section>
    )
}

export default Contact;
