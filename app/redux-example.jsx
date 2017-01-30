var redux = require('redux');

console.log('starting redux example');


var stateDefault = {
  name: 'Annonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;


var nameReducer = (state = 'Annonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state;
  }
};
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



store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Derrick'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'running'
});
store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
})

var addMovie = {
  type: 'ADD_MOVIE',
  title: "Splash",
  genre: "comedy",
};

var addMovieDos = {
  type: 'ADD_MOVIE',
  title: "Turner and Hooch",
  genre: "comedy",
};
var addMovieTres = {
  type: 'ADD_MOVIE',
  title: "Philadelphia",
  genre: "drama",
};

var removeMovie = {
  type: 'REMOVE_MOVIE',
  id: 1
}


store.dispatch(addMovie);
store.dispatch(addMovieDos);
store.dispatch(addMovieTres);

store.dispatch(removeMovie);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'James'
});
