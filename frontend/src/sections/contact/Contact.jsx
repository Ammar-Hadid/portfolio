import SOCIAL_LINKS from "../../constants/socialLinks.js";

import Container from "../../components/layout/Container.jsx";
import Section from "../../components/layout/Section.jsx";
import Heading from "../../components/ui/Heading.jsx"

import Form from "./Form.jsx";
import SocialItem from "./SocialItem.jsx";

const Contact = () => {

    const validSocialItems = SOCIAL_LINKS?.length > 0;

    return (
        <Container>
            <Section id="contact" className="flex-col lg:flex-row justify-around">

                <div className="flex flex-col gap-xl lg:gap-3xl lg:max-w-[40vw] ">
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
                </div>

                <Form />
            </Section>
        </Container>
    )
}

export default Contact;