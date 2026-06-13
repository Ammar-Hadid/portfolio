import { Check, CircleAlert } from "lucide-react";



const Toast = ({ message, variant = 'default' }) => {
    if (!message) return null;

    const variants = {
        default: 'border-text/15 text-text',
        danger: 'border-danger text-danger',
        success: 'border-success text-success',
    }

    const baseClass = `
    ${variants?.[variant] ?? variants.default}
    flex items-center gap-md py-lg px-xl bg-card-bg border rounded-md shadow-lg font-body fixed top-lg left-1/2 -translate-x-1/2 z-100`;

    return (
        <div className={baseClass}>
            {variant === 'danger' && <CircleAlert className="w-xl h-xl" />}
            {variant === 'success' && <Check className="w-xl h-xl" />}
            <p>{message}</p>
        </div>
    )
}

export default Toast;