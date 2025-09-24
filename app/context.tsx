// context.tsx
import { createContext } from "react";

export const DashboardMinueCtx = createContext<{
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);
