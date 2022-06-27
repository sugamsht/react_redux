import { createContext, useState } from "react";

const Context = createContext('English');

export function LanguageStore({ children }) {

    const [language, setLanguage] = useState('English');

    function onLanguageChange(language) {
        setLanguage(language);
    }

    return (
        <Context.Provider value={{ ...language, onLanguageChange }}>
            {children}
        </Context.Provider>
    );
}

export default Context;