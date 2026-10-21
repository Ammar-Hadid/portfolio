import { motion } from "motion/react";

const DesktopMenu = ({ navigationItems, activeSection }) => {

    return (
        <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-2xs rounded-pill p-xs text-body-sm font-body">
                {navigationItems.map(i => {
                    const isActive = activeSection === i.link.replace('#', '');

                    return (
                        <li key={i.link} className="relative">
                            {isActive && (
                                <motion.span
                                    layoutId="nav-active"
                                    transition={{ type: "spring", bounce: .2, duration: .5 }}
                                    className="absolute inset-0 rounded-pill bg-white/[.07] ring-1 ring-white/10"
                                />
                            )}
                            <a
                                href={i.link}
                                aria-current={isActive ? "location" : undefined}
                                className={`relative block px-md py-sm transition-colors ${isActive ? 'text-text' : 'text-text-muted hover:text-text'}`}
                            >
                                {i.label}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default DesktopMenu
