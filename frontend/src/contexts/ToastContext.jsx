import { useState, createContext, useContext, useRef } from "react";
import Toast from "../components/ui/Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState(null);

    const timeoutRef = useRef();

    const showToast = (message, variant = 'default') => {
        clearTimeout(timeoutRef.current);

        setToast({ message, variant });

        timeoutRef.current = setTimeout(() => {
            setToast(null);
        }, 5000);
    }

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}

            {toast && <Toast message={toast?.message} variant={toast.variant} />}
        </ToastContext.Provider>
    )
}

export const useToast = () => {
    return useContext(ToastContext);
}