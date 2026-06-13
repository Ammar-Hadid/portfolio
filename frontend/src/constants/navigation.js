import {
    House,
    User,
    Folder,
    Code,
    Mail
} from "lucide-react";

const NAVIGATION_ITEMS = [
    {
        label: 'Home',
        link: '#hero',
        icon: House,
    },

    {
        label: 'Skills',
        link: '#skills',
        icon: Code,
    },

    {
        label: 'Projects',
        link: '#projects',
        icon: Folder,
    },

    {
        label: 'About',
        link: '#about',
        icon: User,
    },

    {
        label: 'Contact',
        link: '#contact',
        icon: Mail,
    },

]

export default NAVIGATION_ITEMS;