import { AppWindow, Globe, MonitorSmartphone, ServerCog } from "lucide-react";

export const services = [
    {
        id: "web-apps",
        title: "Custom Web Applications",
        description: "Full-stack apps built with Next.js, React and Node.js: dashboards, SaaS products, booking systems and internal tools. Secure, fast and ready to scale.",
        tags: ["Next.js", "React", "TypeScript", "Node.js"],
        icon: AppWindow,
    },

    {
        id: "wordpress",
        title: "Business & WordPress Websites",
        description: "SEO-friendly websites your team can update without touching code. Custom themes, clean structure and fast load times that turn visitors into leads.",
        tags: ["WordPress", "SEO", "Performance"],
        icon: Globe,
    },

    {
        id: "frontend",
        title: "Landing Pages & Frontend",
        description: "Pixel-perfect, responsive interfaces built from your Figma designs, with smooth animations and layouts focused on conversions.",
        tags: ["React", "Tailwind CSS", "Figma"],
        icon: MonitorSmartphone,
    },

    {
        id: "backend",
        title: "APIs & Backend Systems",
        description: "REST APIs, authentication, databases and third-party integrations. The reliable engine that keeps your product running.",
        tags: ["Express.js", "MongoDB", "JWT Auth"],
        icon: ServerCog,
    },
];
