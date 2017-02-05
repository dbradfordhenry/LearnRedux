var redux = require('redux');


console.log('starting redux example');


var actions = require('./actions/index');
var store = require('./store/configureStore').configure();






// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  // document.getElementById('app').innerHTML = state.name;

  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '"target="_blank">View Your Location</a>'
  } else {
    document.getElementById('app').innerHTML = 'NOTHING!';
  }
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch(actions.fetchLocation());
store.dispatch(actions.changeName('Derrick'));

store.dispatch(actions.addHobby('running'));
store.dispatch(actions.addHobby('fishing'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie('Splash', 'comedy'));
store.dispatch(actions.addMovie('Turner and Hooch', 'comedy'));
store.dispatch(actions.addMovie('Philadelphia', 'drama'));







store.dispatch(actions.removeMovie(1));

store.dispatch(actions.changeName('James'));
