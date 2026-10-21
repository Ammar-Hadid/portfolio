import { useState, useEffect } from "react";
import { MotionConfig } from "motion/react";

import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import Background from "./Background.jsx";
import NAVIGATION_ITEMS from "../../constants/navigation.js";


const Layout = ({ children }) => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        // Only the section crossing the vertical middle of the viewport counts as active.
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            })
        }, { rootMargin: '-45% 0px -50% 0px' });

        sections.forEach(section =>
            observer.observe(section)
        )

        return () => observer.disconnect();
    }, []);


    return (
        <MotionConfig reducedMotion="user">
            <div className="relative flex min-h-dvh flex-col">
                <Background />
                <Header navigationItems={NAVIGATION_ITEMS} activeSection={activeSection} />
                <main className="flex flex-col">
                    {children}
                </main>
                <Footer navigationItems={NAVIGATION_ITEMS} />
            </div>
        </MotionConfig>
    )
};

export default Layout
