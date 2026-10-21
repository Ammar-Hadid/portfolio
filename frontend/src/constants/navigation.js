import {
    Layers,
    Folder,
    Workflow,
    User,
    MessageCircleQuestion,
} from "lucide-react";

const NAVIGATION_ITEMS = [
    {
        label: 'Services',
        link: '#services',
        icon: Layers,
    },

    {
        label: 'Work',
        link: '#work',
        icon: Folder,
    },

    {
        label: 'Process',
        link: '#process',
        icon: Workflow,
    },

    {
        label: 'About',
        link: '#about',
        icon: User,
    },

    {
        label: 'FAQ',
        link: '#faq',
        icon: MessageCircleQuestion,
    },
]

export default NAVIGATION_ITEMS;
