const DefaultButton = ({ text, variant = 'primary', onClick }) => {
    const buttonStyles = variant === 'primary' ?
        'bg-primary border-2 border-primary' :
        'bg-transparent border-2 border-body';


    return (
        <button
            onClick={onClick}
            className={`${buttonStyles} text-text px-lg py-md text-body font-body cursor-pointer transition duration-150 ease-in-out hover:scale-[1.05] rounded-xl`}>
            {text}
        </button>
    )
};

export default DefaultButton