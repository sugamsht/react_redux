import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

function Button(props) {
    // const language = useContext(LanguageContext);
    // const text = language === 'English' ? 'Submit' : 'पेश गर्नुहोस्';
    // console.log(text);

    function renderButton(color) {
        return (
            <button className={`ml-5 p-4 rounded-xl bg-${color}-500 text-white text-xl`}>
                <LanguageContext.Consumer>
                    {(language) => {
                        return language === 'English' ? 'Submit' : 'पेश गर्नुहोस्';
                    }}
                </LanguageContext.Consumer>
            </button>
        )
    }

    return (
        //Consumer is used to access the value of multiple context objects from single component 
        <ColorContext.Consumer>
            {(color) => (
                renderButton(color)
            )}
        </ColorContext.Consumer>
    );
}

export default Button;

