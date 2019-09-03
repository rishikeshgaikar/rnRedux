import React, {Component} from 'react';
import Counter from './app/src/scenes/Counter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialCount = {
  count: 0,
};
const reducer = (state = initialCount, action) => {
  switch (action.type) {
    case '  ': {
      return {count: state.count + 1};
    }
    case 'MINUS_COUNT': {
      return {count: state.count - 1};
    }
  }
  return state;
};
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
