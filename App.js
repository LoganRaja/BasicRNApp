import * as React from 'react';
import Navigation from './src/navigator/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
