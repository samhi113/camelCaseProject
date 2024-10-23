import { useState, useContext, createContext } from "react";

const AppContext = createContext();
function AppProvider({ children }) {
    const [appState, setAppState] = useState({isActive: true});

    return (
        <AppContext.Provider value={appState}>
            {children}
        </AppContext.Provider>
    );
}

export default function useAppState() {
    return useContext(AppContext);
}