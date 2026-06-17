import { useContext } from "react";
import { ToastContext } from "./ToastContextValue.js";

export const useToast = () => {
    return useContext(ToastContext);
}
