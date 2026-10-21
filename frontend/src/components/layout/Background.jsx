const Background = () => {
    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_20%,transparent_75%)]" />

            <div className="animate-aurora absolute -top-[30%] left-[10%] h-[70vh] w-[70vw] rounded-full bg-primary/25 blur-[140px]" />
            <div className="animate-aurora absolute -top-[10%] -right-[20%] h-[55vh] w-[50vw] rounded-full bg-[#4B2BD1]/25 blur-[140px] [animation-delay:-9s]" />

            <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-linear-to-t from-bg to-transparent" />
        </div>
    )
}

export default Background;
