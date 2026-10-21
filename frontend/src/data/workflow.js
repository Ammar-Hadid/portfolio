import { ClipboardList, PenTool, Code2, FlaskConical, Rocket } from "lucide-react";

export const steps = [
    {
        id: "discover",
        title: "Discover",
        description: "We talk through your goals, users and budget. You get a clear scope and timeline before any code is written.",
        icon: ClipboardList,
    },

    {
        id: "design",
        title: "Design",
        description: "Wireframes and UI that put your users first. You approve the direction before development begins.",
        icon: PenTool,
    },

    {
        id: "develop",
        title: "Develop",
        description: "Clean, maintainable code with regular progress updates and preview links, so you always know where things stand.",
        icon: Code2,
    },

    {
        id: "test",
        title: "Test",
        description: "Every feature is tested across devices and browsers until it works exactly as it should.",
        icon: FlaskConical,
    },

    {
        id: "launch",
        title: "Launch & Support",
        description: "Deployment, performance checks and post-launch support to keep everything running smoothly.",
        icon: Rocket,
    },
];

export default steps;
