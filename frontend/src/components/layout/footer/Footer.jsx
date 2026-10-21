import { ArrowUp } from "lucide-react";

import Container from "../Container.jsx";
import Logo from "../../ui/Logo.jsx";
import SOCIAL_LINKS from "../../../constants/socialLinks.js";

const Footer = ({ navigationItems }) => {
    return (
        <footer className="relative border-t border-white/[.07] py-2xl">
            <div aria-hidden className="absolute inset-x-0 top-0 mx-auto h-px max-w-[600px] bg-linear-to-r from-transparent via-primary to-transparent" />

            <Container className="flex flex-col gap-xl">
                <div className="flex flex-col justify-between gap-xl md:flex-row md:items-center">
                    <div className="flex flex-col gap-sm">
                        <Logo />
                        <p className="max-w-[36ch] text-body-sm text-text-muted">
                            Full-stack developer building fast, scalable web apps with React, Next.js and WordPress.
                        </p>
                    </div>

                    <nav aria-label="Footer">
                        <ul className="flex flex-wrap gap-x-lg gap-y-sm text-body-sm text-text-muted">
                            {navigationItems.map(i => (
                                <li key={i.link}>
                                    <a href={i.link} className="hover:text-text transition-colors">{i.label}</a>
                                </li>
                            ))}
                            <li>
                                <a href="#contact" className="hover:text-text transition-colors">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex flex-col-reverse justify-between gap-lg border-t border-white/[.07] pt-lg sm:flex-row sm:items-center">
                    <p className="text-body-sm text-text/40">© {new Date().getFullYear()} Ammar Hadid. All rights reserved.</p>

                    <div className="flex items-center gap-sm">
                        {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                            <a
                                key={href}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                aria-label={label}
                                className="glass grid size-10 place-items-center rounded-full text-text-muted transition-colors hover:text-text"
                            >
                                <Icon className="size-4" />
                            </a>
                        ))}

                        <a
                            href="#hero"
                            aria-label="Back to top"
                            className="ml-sm grid size-10 place-items-center rounded-full bg-primary/15 text-primary-light ring-1 ring-primary/30 transition-colors hover:bg-primary/25"
                        >
                            <ArrowUp className="size-4" />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;
