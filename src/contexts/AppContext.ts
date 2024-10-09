import { createContext, useContext } from "react";

export const DeleteItemContext = createContext<((index: number) => void) | null>(null);

export const EditItemContext = createContext<((index: number) => void) | null>(null);

export const useDelete = () => {
    const context = useContext(DeleteItemContext);
    if (context === null) {
        throw new Error("useDelete must be used within a DeleteItemContext.Provider");
    }
    return context;
}

export const useEdit = () => {
    const context = useContext(EditItemContext);
    if (context === null) {
        throw new Error("useEdit must be used within a EditItemContext.Provider");
    }
    return context;
}