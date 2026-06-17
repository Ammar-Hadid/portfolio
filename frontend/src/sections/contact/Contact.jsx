import SOCIAL_LINKS from "../../constants/socialLinks.js";

import Container from "../../components/layout/Container.jsx";
import Section from "../../components/layout/Section.jsx";
import Heading from "../../components/ui/Heading.jsx"

import Form from "./Form.jsx";
import SocialItem from "./SocialItem.jsx";

import { sendContactForm } from "./api/sendContactForm.js";
import { useToast } from "../../contexts/useToast.js";

import { motion } from "motion/react";
import { slideFromLeft } from "../../animations/slideFromLeft.js";

const Contact = () => {
    const { showToast } = useToast();


    const validSocialItems = SOCIAL_LINKS?.length > 0;

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
                showToast('Form submitted successfully. Expect a response within 24–48 hours.', 'success');
                return true;
            }
        }

        catch (error) {
            showToast(error?.message || 'Message failed to send. Please try again.', 'danger')
        }
    }

    return (
        <Container>
            <Section id="contact" className="flex-col lg:flex-row justify-around">

                <motion.div
                    variants={slideFromLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: .2
                    }}

                    className="flex flex-col gap-xl lg:gap-3xl lg:max-w-[40vw] "
                >
                    <Heading
                        subtitle='Get in touch'
                        title="Let's Work Together"
                        description="Have a project in mind or want to work together? Feel free to reach out."
                    />

                    {validSocialItems && (
                        <div className="flex flex-col gap-lg items-start">
                            {SOCIAL_LINKS.map(social => {
                                return <SocialItem key={social.id} social={social} />
                            })}
                        </div>
                    )}
                </motion.div>

                <Form onSubmit={handleFormSubmit} />
            </Section>
        </Container>
    )
}

export default Contact;
