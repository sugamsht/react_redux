import React from 'react';
import SongDetail from './SongDetail';
import SongList from './SongList';

function App(props) {
    return (
        <div className='flex w-screen h-screen px-[20vw] gap-20 pt-20'>
            {/* <h1 className='text-center text-red color-red text-2xl'>Hello World</h1> */}
            <SongList />
            <SongDetail />
        </div>
    );
}

export default App;