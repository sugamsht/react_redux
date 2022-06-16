import React from 'react';
import { Songs } from './Songs';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

//SongList component
const SongList = (props) => {
    // console.log(props);
    return (
        <div className='w-1/2 h-full flex flex-col overflow-hidden'>
            <div className='flex flex-row justify-between items-center h-16'>
                <h1 className='text-2xl text-gray-800'>Song List</h1>
            </div>
            <div className='flex flex-col h-full mr-[10vw]'>
                {props.songs.map((song, index) => {
                    return (
                        <div key={song.title} className='flex flex-row justify-between items-center h-16 border-b-2'>
                            <div className='flex flex-col'>
                                <h2 className='text-xl text-gray-800'>{song.title}</h2>
                            </div>
                            <div className='flex flex-col'>
                                <button
                                    // onClick={() => props.setIndex(index)} 
                                    onClick={() => props.selectSong(song)}
                                    id="select"
                                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Select</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => { //can be called anything we want
    console.log(state);
    return {
        songs: state.songs,
    }
};

export default connect(mapStateToProps, { selectSong })(SongList); //connect() is a function that takes a component as an argument and returns a new component
