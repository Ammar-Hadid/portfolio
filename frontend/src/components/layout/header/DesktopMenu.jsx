const DesktopMenu = ({ navigationItems, activeSection }) => {

    return (
        <ul className="hidden lg:flex list-none p-0 m-0 items-center gap-xl text-text text-body font-light tracking-widest">
            {navigationItems.map(i => {
                const isActive = activeSection === i.link.replace('#', '');

                const linkStyles = isActive ? 'border-b border-primary rounded-sm' : ''

                return (
                    <li key={i.link} className={`${linkStyles} hover:text-primary`}>
                        <a href={i.link}>{i.label}</a>
                    </li>)
            })}
        </ul>
    )
}

export default DesktopMenu