const Section = ({ children, id = '', className = '' }) => {
    return (
        <section className={`flex flex-col gap-2xl lg:gap-3xl ${className}`} id={id}>
            {children}
        </section>
    )
}

export default Section