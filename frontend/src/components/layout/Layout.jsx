import { useState, useEffect } from "react";

import Header from "./header/Header.jsx";
import NAVIGATION_ITEMS from "../../constants/navigation.jsx";

const Layout = ({ children }) => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            })
        }, { threshold: .5 });

        sections.forEach(section =>
            observer.observe(section)
        )

        return () => observer.disconnect();
    }, []);


    return (
        <div className="flex flex-col bg-bg gap-section">
            <Header navigationItems={NAVIGATION_ITEMS} activeSection={activeSection} />
            <main className="flex flex-col gap-[20dvh] lg:gap-[10dvh]">
                {children}
            </main>
        </div>
    )
};

export default Layout


