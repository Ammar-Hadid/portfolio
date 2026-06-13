import Step from "./Step.jsx";

const StepsWrapper = ({ steps }) => {
    if (steps?.length < 1) return null;

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5xl relative">
            {steps.map((step, index) => {
                return <Step key={step.id} step={step} index={index} />
            })}

            <div className="absolute
             w-px h-full lg:w-full lg:h-px
            bg-text/25 md:bg-transparent lg:bg-text/25
            left-[25%] lg:top-[25%] lg:left-auto" />
        </div>
    )
}

export default StepsWrapper