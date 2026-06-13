import ClipBoard from "../assets/images/workflow/icons/clipboard.svg?react";
import Code from "../assets/images/workflow/icons/code.svg?react";
import Pencil from "../assets/images/workflow/icons/pencil.svg?react";
import Tube from "../assets/images/workflow/icons/tub.svg?react";
import Upload from "../assets/images/workflow/icons/upload.svg?react";

export const steps = [
    {
        id: "plan",
        title: "Plan",
        description: "Understand the problem and map out the solution before touching any code.",
        icon: ClipBoard,
    },

    {
        id: "design",
        title: "Design",
        description: "Create wireframes and design a UI that puts the user first.",
        icon: Pencil,
    },

    {
        id: "develop",
        title: "Develop",
        description: "Build with clean, maintainable code that's easy to scale.",
        icon: Code,
    },

    {
        id: "test",
        title: "Test",
        description: "Hunt down bugs until everything works exactly as it should.",
        icon: Tube,
    },

    {
        id: "deploy",
        title: "Deploy",
        description: "Ship it and monitor performance after launch.",
        icon: Upload,
    },
];

export default steps;