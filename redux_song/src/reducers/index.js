import { combineReducers } from "redux"

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05', artist: 'TLC' },
        { title: 'Macarena', duration: '2:30', artist: 'TLC' },
        { title: 'All Star', duration: '3:15', artist: 'Smash Mouth' },
        { title: 'I Want it That Way', duration: '1:45', artist: 'Backstreet' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
