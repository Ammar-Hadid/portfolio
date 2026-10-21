import {
    FaHtml5,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaDocker,
    FaLinux,
    FaWordpress,
} from "react-icons/fa";

import {
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiMongodb,
    SiJsonwebtokens,
    SiExpress,
    SiPostman,
} from "react-icons/si";

import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3, IoLogoFigma } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";


export const skills = [
    {
        id: "frontend",
        label: "Frontend",
        description: "Fast, responsive interfaces that feel great on every device.",
        skills: [
            { id: "nextjs", label: "Next.js", icon: SiNextdotjs },
            { id: "react", label: "React", icon: FaReact },
            { id: "typescript", label: "TypeScript", icon: SiTypescript },
            { id: "javascript", label: "JavaScript", icon: SiJavascript },
            { id: "tailwind", label: "Tailwind CSS", icon: RiTailwindCssFill },
            { id: "html", label: "HTML", icon: FaHtml5 },
            { id: "css", label: "CSS", icon: IoLogoCss3 },
        ],
    },

    {
        id: "backend",
        label: "Backend",
        description: "Secure APIs, authentication and data that scale with you.",
        skills: [
            { id: "nodejs", label: "Node.js", icon: FaNodeJs },
            { id: "express", label: "Express.js", icon: SiExpress },
            { id: "mongodb", label: "MongoDB", icon: SiMongodb },
            { id: "jwt", label: "JWT Auth", icon: SiJsonwebtokens },
        ],
    },

    {
        id: "cms-tools",
        label: "CMS & Tooling",
        description: "Easy-to-manage sites and a professional delivery workflow.",
        skills: [
            { id: "wordpress", label: "WordPress", icon: FaWordpress },
            { id: "git", label: "Git", icon: FaGitAlt },
            { id: "github", label: "GitHub", icon: FaGithub },
            { id: "docker", label: "Docker", icon: FaDocker },
            { id: "linux", label: "Linux", icon: FaLinux },
            { id: "postman", label: "Postman", icon: SiPostman },
            { id: "figma", label: "Figma", icon: IoLogoFigma },
            { id: "vscode", label: "VS Code", icon: VscVscode },
        ],
    },
];
