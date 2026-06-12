import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,

    FaNodeJs,

    FaGitAlt,
    FaGithub,

    FaDocker,
    FaLinux
} from "react-icons/fa";

import {
    SiMongodb,
    SiJsonwebtokens,
    SiExpress,
    SiPostman
} from "react-icons/si";

import {
    RiTailwindCssFill
} from "react-icons/ri";

import {
    IoLogoCss3,
    IoLogoFigma
} from "react-icons/io5";

import {
    VscVscode
} from "react-icons/vsc";


export const skills = [
    {
        id: "frontend",
        label: "Frontend",
        skills: [
            {
                id: "html",
                label: "HTML",
                icon: FaHtml5,
            },
            {
                id: "css",
                label: "CSS",
                icon: IoLogoCss3,
            },
            {
                id: "javascript",
                label: "JavaScript",
                icon: FaJs,
            },
            {
                id: "react",
                label: "React",
                icon: FaReact,
            },
            {
                id: "tailwind",
                label: "Tailwind CSS",
                icon: RiTailwindCssFill,
            },
        ],
    },

    {
        id: "backend",
        label: "Backend",
        skills: [
            {
                id: "nodejs",
                label: "Node.js",
                icon: FaNodeJs,
            },
            {
                id: "mongodb",
                label: "MongoDB",
                icon: SiMongodb,
            },
            {
                id: "jwt",
                label: "JWT",
                icon: SiJsonwebtokens,
            },
            {
                id: "express",
                label: "Express.js",
                icon: SiExpress,
            },
        ],
    },

    {
        id: "tools",
        label: "Tools",
        skills: [
            {
                id: "git",
                label: "Git",
                icon: FaGitAlt,
            },
            {
                id: "github",
                label: "GitHub",
                icon: FaGithub,
            },
            {
                id: "vscode",
                label: "VS Code",
                icon: VscVscode,
            },
            {
                id: "postman",
                label: "Postman",
                icon: SiPostman,
            },
            {
                id: "figma",
                label: "Figma",
                icon: IoLogoFigma,
            },
        ],
    },

    {
        id: "learning",
        label: "Currently Learning",
        skills: [
            {
                id: "docker",
                label: "Docker",
                icon: FaDocker,
            },
            {
                id: "linux",
                label: "Linux",
                icon: FaLinux,
            },
        ],
    },
];

