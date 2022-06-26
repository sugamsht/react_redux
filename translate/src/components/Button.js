import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

function Button(props) {
    const language = useContext(LanguageContext);
    const text = language === 'English' ? 'Submit' : 'पेश गर्नुहोस्';
    // console.log(text);
    return (
        <button className=' ml-5 p-4 rounded-xl bg-blue-800 text-white'>{text}</button>
    );
}

export default Button;

