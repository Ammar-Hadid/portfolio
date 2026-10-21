import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Download, Menu, X } from "lucide-react";

import Logo from "../../ui/Logo.jsx";
import Button from "../../ui/Button.jsx";

import SOCIAL_LINKS from "../../../constants/socialLinks.js";
import { CV_PATH } from "../../../constants/cv.js";


const MobileMenu = ({ navigationItems, activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e) => e.key === "Escape" && setIsOpen(false);

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen]);

    const close = () => setIsOpen(false);

    return (
        <div className="lg:hidden">
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                aria-expanded={isOpen}
                className="glass grid size-10 place-items-center rounded-full text-text cursor-pointer"
            >
                <Menu className="size-5" />
            </button>

            {createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-label="Menu"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: .2 }}
                            className="fixed inset-0 z-[60] flex flex-col justify-between gap-xl overflow-y-auto bg-bg/90 p-lg text-text backdrop-blur-2xl"
                        >
                            <div className="flex flex-col gap-2xl">
                                <div className="flex items-center justify-between">
                                    <Logo />

                                    <button
                                        type="button"
                                        onClick={close}
                                        aria-label="Close menu"
                                        className="glass grid size-10 place-items-center rounded-full cursor-pointer"
                                    >
                                        <X className="size-5" />
                                    </button>
                                </div>

                                <nav aria-label="Mobile">
                                    <ul className="flex flex-col gap-xs">
                                        {navigationItems.map((i, index) => {
                                            const Icon = i.icon;
                                            const isActive = activeSection === i.link.replace('#', '');

                                            return (
                                                <motion.li
                                                    key={i.link}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: .05 * index + .05 }}
                                                >
                                                    <a
                                                        href={i.link}
                                                        onClick={close}
                                                        className={`flex items-center gap-md rounded-2xl px-lg py-md font-display text-h4 transition-colors ${isActive ? 'bg-primary/15 text-text ring-1 ring-primary/30' : 'text-text-muted hover:text-text hover:bg-white/5'}`}
                                                    >
                                                        <Icon className={`size-5 ${isActive ? 'text-primary-light' : ''}`} />
                                                        {i.label}
                                                    </a>
                                                </motion.li>
                                            )
                                        })}
                                    </ul>
                                </nav>
                            </div>

                            <div className="flex flex-col gap-lg border-t border-white/10 pt-lg">
                                <Button href="#contact" onClick={close} icon={ArrowRight}>
                                    Start your project
                                </Button>

                                <div className="flex items-center justify-between gap-md">
                                    <div className="flex items-center gap-sm">
                                        {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                                            <a
                                                key={href}
                                                href={href}
                                                target={href.startsWith("http") ? "_blank" : undefined}
                                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                aria-label={label}
                                                className="glass grid size-11 place-items-center rounded-full text-text-muted hover:text-text transition-colors"
                                            >
                                                <Icon className="size-5" />
                                            </a>
                                        ))}
                                    </div>

                                    <a
                                        href={CV_PATH}
                                        download="Ammar-Hadid-CV.pdf"
                                        className="flex items-center gap-sm text-body-sm text-text-muted hover:text-text"
                                    >
                                        <Download className="size-4" />
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    )
}

export default MobileMenu
