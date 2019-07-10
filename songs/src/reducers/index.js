import { combineReducers } from 'redux';

const songsReducers = () => {
    return [
        {title: 'B', duration : '4:00'},
        {title: 'L', duration : '2:50'},
        {title: 'U', duration : '3:35'},
        {title: 'E', duration : '6:00'}
    ];
};

const selectedSongReducer = (selectedSong=null , action) => {
    if(action.type==='SELECTED_SONG'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs:songsReducers,
    selectedSong:selectedSongReducer
});
