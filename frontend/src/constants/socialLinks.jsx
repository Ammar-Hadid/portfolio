import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SOCIAL_LINKS = [
    {
        href: "https://github.com/ElPridro",
        label: "GitHub profile",
        icon: FaGithub,
    },
    {
        href: "https://www.linkedin.com/in/ammar-hadid-29326824b/",
        label: "Linkedin profile",
        icon: FaLinkedin,
    },
    {
        href: "mailto:ammarhadid2005@gmail.com?subject=Portfolio Inquiry",
        label: "Send me an email",
        icon: MdEmail,
    },
];

export default SOCIAL_LINKS;
