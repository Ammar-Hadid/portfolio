import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import Logo from "../../ui/Logo.jsx";
import Button from "../../ui/Button.jsx";
import DesktopMenu from "./DesktopMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";

const Header = ({ navigationItems, activeSection }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (navigationItems.length < 1) return null;

    const barStyles = scrolled
        ? "glass bg-bg/75 shadow-[0_10px_40px_-12px_rgba(0,0,0,.7)]"
        : "border border-transparent";

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-md pt-md">
            <div className={`mx-auto flex max-w-[1200px] items-center justify-between gap-md rounded-pill py-sm pl-lg pr-sm transition-all duration-300 ${barStyles}`}>
                <Logo />

                <DesktopMenu navigationItems={navigationItems} activeSection={activeSection} />

                <div className="flex items-center gap-sm">
                    <div className="hidden sm:block">
                        <Button href="#contact" size="sm" icon={ArrowRight}>
                            Let's talk
                        </Button>
                    </div>
                    <MobileMenu navigationItems={navigationItems} activeSection={activeSection} />
                </div>
            </div>
        </header>
    )
}

export default Header;
