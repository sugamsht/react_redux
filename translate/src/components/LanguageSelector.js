import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

function LanguageSelector(props) {
    const text = useContext(LanguageContext);
    console.log("yo cha aaile", text);
    return (
        <div className="px-5 pt-5 flex items-center gap-2">
            <h1>Select a Language:</h1>
            <img src="https://img.freepik.com/free-vector/official-national-flag-united-states-america_147754-319.jpg?w=2000" alt="USA"
                className={`w-10 h-10 p-2 border-2 ${text.language === "English" ? "border-red-500" : "border-black"}`}
                onClick={() => text.onLanguageChange('English')} />
            <img src="https://cdn.countryflags.com/thumbs/nepal/flag-400.png" alt="nepal"
                className={`w-10 h-10 p-2 border-2 ${text.language === "Nepali" ? "border-red-500" : "border-black"}`}
                onClick={() => text.onLanguageChange('Nepali')} />
        </div>
    );
}

export default LanguageSelector;