import React from 'react';

function Field(props) {
    return (
        <div className='flex flex-col p-5 '>
            <label>Name</label>
            <input className='border-2 w-[30vw] h-[20vh] border-black' type="text" />
        </div >
    );
}

export default Field;