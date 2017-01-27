var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
  searchText: 'Annonymous',
  todos: [],
  completed: false
};
var reducer = (state = stateDefault, action) => {

  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
    return state;

  }
  return state;
};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();


  document.getElementById('app').innerHTML = state.searchText;
});
var currentState = store.getState();
console.log('currentState', currentState);
var action = {
  type: 'CHANGE_TEXT',
  searchText: 'NEW TEXT'
};
store.dispatch({
  type: 'CHANGE_TEXT',
  searchText: 'NEW TEXT'
});
store.dispatch({
  type: 'CHANGE_TEXT',
  searchText: 'Money'
});
store.dispatch({
  type: 'CHANGE_TEXT',
  searchText: 'Cars'
});
