import Logo from "../../ui/Logo.jsx";
import DesktopMenu from "./DesktopMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";

const Header = ({ navigationItems, activeSection }) => {

    if (navigationItems.length < 1) return null;

    return (
        <header className="sticky top-0 left-0 w-full z-9999 flex justify-between items-center p-xl bg-bg">

            <Logo className="text-h4" />
            <DesktopMenu navigationItems={navigationItems} activeSection={activeSection} />
            <MobileMenu navigationItems={navigationItems} activeSection={activeSection} />
        </header>
    )
}

export default Header;
