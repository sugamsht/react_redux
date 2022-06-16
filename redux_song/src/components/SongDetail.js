import React from 'react';
import { Songs } from './Songs';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
    console.log("yo songslist ko", selectedSong);
    return (
        <div className='w-1/2 h-full flex flex-col overflow-hidden'>
            <div className='flex flex-row justify-between items-center h-16'>
                <h1 className='text-2xl text-gray-800'>Song Detail: </h1>
            </div>
            <div className='flex flex-col h-full'>
                <div className='flex flex-row justify-start items-center h-16'>
                    <h2 className='text-xl text-gray-800 px-5'>Song Title: </h2>
                    <h2>{selectedSong?.title}</h2>
                </div>
                <div className='flex flex-row justify-start items-center h-16'>
                    <h2 className='text-xl text-gray-800 px-5'>Artist: </h2>
                    <h2>{selectedSong?.artist}</h2>
                </div>
                <div className='flex flex-row justify-start items-center h-16'>
                    <h2 className='text-xl text-gray-800 px-5'>Duration: </h2>
                    <h2>{selectedSong?.duration}</h2>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail)