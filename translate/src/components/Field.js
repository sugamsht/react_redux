import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

function Field(props) {
    const language = useContext(LanguageContext);
    const text = language === 'English' ? 'Name' : 'नाम';

    return (
        <div className='flex flex-col p-5 '>
            <label>{text}</label>
            <input className='border-2 w-[30vw] h-[20vh] border-black' type="text" />
        </div >
    );
}

export default Field;