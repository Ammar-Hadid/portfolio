import Container from "./Container.jsx";

const Section = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`relative py-section ${className}`}>
            <Container className="flex flex-col gap-2xl lg:gap-3xl">
                {children}
            </Container>
        </section>
    )
}

export default Section
