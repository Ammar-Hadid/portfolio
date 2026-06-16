const DefaultButton = ({
    children,
    variant = "primary",
    type = "button",
    onClick,
    href,
    target,
    rel,
    download,
}) => {
    const buttonStyles =
        variant === "primary"
            ? "bg-primary border-2 border-primary"
            : "bg-transparent border-2 border-body";

    const commonStyles = `${buttonStyles} text-text text-center px-lg py-md text-body font-body cursor-pointer transition duration-150 ease-in-out hover:scale-[1.01] rounded-xl`;

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={commonStyles}
                download={download}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={commonStyles}
        >
            {children}
        </button>
    );
};

export default DefaultButton;