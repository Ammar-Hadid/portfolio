import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SOCIAL_LINKS = [
    {
        id: 'github',
        href: "https://github.com/Ammar-Hadid",
        label: "GitHub profile",
        placeHolder: 'github.com/Ammar-Hadid',
        icon: FaGithub,
    },
    {
        id: 'linkedin',
        href: "https://www.linkedin.com/in/ammar-hadid-29326824b/",
        label: "LinkedIn profile",
        placeHolder: 'linkedin.com/in/ammar-hadid',
        icon: FaLinkedin,
    },
    {
        id: 'email',
        href: "mailto:hello@ammarhadid.com?subject=Portfolio Inquiry",
        label: "Send me an email",
        placeHolder: 'hello@ammarhadid.com',
        icon: MdEmail,
    },
];

export default SOCIAL_LINKS;
