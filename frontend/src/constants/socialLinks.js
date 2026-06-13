import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SOCIAL_LINKS = [
    {
        id: 'github',
        href: "https://github.com/ElPridro",
        label: "GitHub profile",
        placeHolder: 'https://github.com',
        icon: FaGithub,
    },
    {
        id: 'linkedin',
        href: "https://www.linkedin.com/in/ammar-hadid-29326824b/",
        label: "Linkedin profile",
        placeHolder: 'https://www.linkedin.com',
        icon: FaLinkedin,
    },
    {
        id: 'email',
        href: "mailto:ammarhadid2005@gmail.com?subject=Portfolio Inquiry",
        label: "Send me an email",
        placeHolder: 'ammarhadid2005@gmail.com',
        icon: MdEmail,
    },
];

export default SOCIAL_LINKS;
