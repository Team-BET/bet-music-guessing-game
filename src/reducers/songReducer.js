const initState = {
  musicList: [],
  // correctAnswers:0,
  // inCorrectAnswers:0,
  score:0
};

const reducer = (state = initState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case "GET_SONG":
      newState.musicList = action.payload;
      break;
    case "ADD_TO_CORRECT":
      newState.score = newState.score + 1;
      break;
      case "ADD_TO_INCORRECT":
        newState.score = newState.score - 1;
        break;
     case "UPDATE_SCORE":
       console.log('action', action.payload)
          newState.score = action.payload;
          break; 
    default:
      break;
  }

  return newState;
};

export default reducer;
