var redux = require('redux');

console.log('starting redux example');




//Name reducer and action generators
var nameReducer = (state = 'Annonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state;
  }
};

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};

//Hobbies reducer and action generators
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
    return [
      ...state,
      {
        id: nextHobbyId ++,
        hobby: action.hobby
      }
    ];
    case 'REMOVE_HOBBY':
      return state.filter((movie) =>  movie.id !== action.id)
    default:
    return state;
  }
};
var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};
var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
};

//Movies reducer and action generators
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
    return [
      ...state,
      {
        id: nextMovieId ++,
        movie: action.movie
      }
    ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) =>  movie.id !== action.id)
    default:
    return state;
  }
};
var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  }
};
var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
};

//Map reducer and action generators
var mapReducer = (state {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
    case  'START_LOCATION_FETCH':
    return {
      isFetching: true,
      url: undefined
    };
    case 'COMPLETE_LOCATION_FETCH':
    return {
      isFetching: false,
      url: action.url
    };
    default:
    return state;
  }
};

var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
};
var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE'
  }
};
var fetchLocation = () => {
  store.dispatch(startLocationFetch());

  axios.get('http://ipinfo.io')
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New state', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);



store.dispatch(changeName('Derrick'));

store.dispatch(addHobby('running'));
store.dispatch(addHobby('fishing'));

store.dispatch(removeHobby(2));

store.dispatch(addMovie('Splash', 'comedy'));
store.dispatch(addMovie('Turner and Hooch', 'comedy'));
store.dispatch(addMovie('Philadelphia', 'drama'));







store.dispatch(removeMovie(1));

store.dispatch(changeName('James'));
