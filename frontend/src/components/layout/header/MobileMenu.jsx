import { useState } from "react";

import Logo from "../../ui/Logo.jsx";
import { FaDownload } from "react-icons/fa";
import { Menu, X } from "lucide-react";

import SOCIAL_LINKS from "../../../constants/socialLinks.js";


const MobileMenu = ({ navigationItems, activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const menuClassList = "fixed inset-0 z-50 flex flex-col justify-between bg-bg text-text transition-transform duration-300 ease-in-out p-lg";
    const stateMenuClassList = isOpen ? 'translate-x-0' : 'translate-x-full';


    return (
        <div className="lg:hidden">
            <button type="button" onClick={() => setIsOpen(true)} className="bg-transparent flex items-center justify-center border-transparent rounded-lg">
                <Menu className="text-text w-lg h-lg cursor-pointer" />
            </button>

            <div className={`${menuClassList} ${stateMenuClassList}`}>

                {/* Block 1 */}
                <div className="flex flex-col gap-xl">
                    {/* Header */}
                    <div className="flex justify-between">
                        <Logo className="text-h3" />

                        <button type="button" onClick={() => setIsOpen(false)}>
                            <X className="text-text w-lg h-lg hover:text-danger cursor-pointer" />
                        </button>
                    </div>

                    {/* Menu */}
                    <ul className="flex flex-col gap-lg text-xl">
                        {navigationItems.map(i => {
                            const Icon = i.icon;
                            const isActive = activeSection === i.link.replace('#', '');
                            const linkStateStyles = isActive ? "text-text bg-primary-200 border border-text/5 " : "bg-transparent text-white/75 hover:text-text hover:bg-primary-200"
                            const iconStateStyles = isActive ? "text-primary" : "group-hover:text-primary"
                            return (
                                <li key={i.link}>
                                    <a
                                        href={i.link}
                                        onClick={() => setIsOpen(false)}
                                        className={`${linkStateStyles} group flex gap-md py-md px-lg items-center rounded-sm cursor-pointer transition-colors duration-100 ease-in-out`}>

                                        <Icon className={`${iconStateStyles} w-lg h-lg transition-colors duration-100`} />
                                        <span>{i.label}</span>
                                    </a>
                                </li>)
                        })}
                    </ul>
                </div>

                {/* Block 2 */}
                <div className="flex flex-col items-stretch gap-lg border-t border-text/15 pt-lg">
                    <p className="text-body font-body text-text-muted">Let's connect</p>

                    <div className="flex items-center gap-md">
                        {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                            <a
                                key={href}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                aria-label={label}
                                className="text-text-muted hover:text-text transition-colors duration-100 bg-card-bg p-md rounded-2xl"
                            >
                                <Icon className="w-lg h-lg" />
                            </a>
                        ))}
                    </div>

                    <a
                        href="/documents/cv-01.pdf"
                        download="Ammar-Hadid-CV.pdf"
                        className="flex items-center justify-between flex-1 text-text rounded-sm bg-transparent border-2 border-primary px-xl py-md text-body font-body">
                        Download CV
                        <FaDownload className="w-md h-md " />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu
