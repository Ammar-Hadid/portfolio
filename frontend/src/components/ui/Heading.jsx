const Heading = ({ subtitle, title }) => {

    if (!subtitle || !title) {
        return null;
    }

    return (
        <div className="flex flex-col gap-sm">
            {/* Subheading */}
            <div className="flex gap-md items-center">
                <div className="w-md lg:w-lg h-md lg:h-lg bg-primary"></div>
                <div className="text-primary uppercase text-h5">{subtitle}</div>
            </div>

            <h2 className="text-h2 font-display text-text capitalize">{title}</h2>
        </div>
    )
}

export default Heading;