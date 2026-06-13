const Step = ({ step, index }) => {
    if (!step) return null;

    const { title, description, icon } = step;

    if (!title || !description) return null;

    const formattedIndex = `${index + 1}.`;

    const Icon = icon;

    return (
        <div className="flex items-center lg:items-stretch lg:flex-col gap-lg">

            <div className="flex items-center justify-center rounded-3xl p-lg lg:py-xl border border-text/15 relative z-2 bg-bg">
                <Icon className="w-5xl h-5xl text-primary" />
            </div>


            <div className="flex flex-col">
                <h3 className="font-display uppercase text-h5 text-text">{`${formattedIndex} ${title}`}</h3>
                <p className="text-body-sm text-text-muted text-pretty font-body">{description}</p>
            </div>
        </div>
    )
}

export default Step;
