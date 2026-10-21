import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";

const Heading = ({ eyebrow, title, description = '', align = 'left' }) => {
    if (!eyebrow || !title) {
        return null;
    }

    const alignStyles = align === 'center' ? 'items-center text-center mx-auto' : 'items-start';

    return (
        <Reveal className={`flex flex-col gap-md max-w-[760px] ${alignStyles}`}>
            <Eyebrow>{eyebrow}</Eyebrow>

            <h2 className="text-h2 font-display font-semibold tracking-tight leading-[1.1] text-text text-balance">{title}</h2>

            {description && <p className="text-text-muted font-body text-body-lg text-pretty leading-relaxed">{description}</p>}
        </Reveal>
    )
}

export default Heading;
