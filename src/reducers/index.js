import { combineReducers } from 'redux';
const songReducer = () => {
  return [
    { title: "Smells Like Teen Spirit", duration:'4:05'},
    { title: "Macarena", duration: '2:30'},
    { title: "I want it that way", duration:'3:15'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
