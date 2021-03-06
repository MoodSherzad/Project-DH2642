// Model
export const initialState = {
  user: null,
  token: null,
  playing: false,
  currentTrack: null,
  currentArtist: null,
  currentAlbum: null,
  player: null,
  likedSongs: [],
  searchText: "santa",
  searchType: "track",
};

const reducer = (state, action) => { //A special function called reducer is implemented here to act as a dispatch gun                              // to shoot out data whenever needed and to save data to the wall(data layer)
  //console.log(state)
  switch (action.type) {            // switch is used to perform different actions based on different conditions
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_CURRENTTRACK":
      return {
        ...state,
        currentTrack: action.currentTrack,
      }
    case "SET_CURRENTARTIST":
      return {
        ...state,
        currentArtist: action.currentArtist, 
      }
    case "SET_CURRENTALBUM":
      return {
        ...state,
        currentAlbum: action.currentAlbum, 
      }
    case "SET_PLAYER":
      return {
        ...state,
        player: action.player,
      };
    case "SET_LIKEDSONGS":
        return {
          ...state,
          likedSongs:action.likedSongs,
        }
      case "SET_SEARCHTEXT":
          return {
            ...state,
            searchText:action.searchText,
          }
      case "SET_SEARCHTYPE":
        return {
          ...state,
          searchType:action.searchType,
        }

        

    default:
      return state;
  }
};

export default reducer; 
