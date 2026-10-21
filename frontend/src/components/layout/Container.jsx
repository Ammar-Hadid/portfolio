const Container = ({ children, className = "" }) => {
    return (
        <div className={`mx-auto w-full max-w-[1200px] px-lg md:px-xl ${className}`}>
            {children}
        </div>
    )
}

export default Container
