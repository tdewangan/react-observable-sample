import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import UserScreen from './src/UserScreen';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <UserScreen />
      </Provider>
    );
  }
}
