/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers"
import Auth from './auth'
import SplashScreen from 'react-native-splash-screen'

const store = createStore(rootReducer)

const App: () => React$Node = () => {
  useEffect(() => {
    SplashScreen.hide()
  })
  return (
    <Provider store={store}>
      <Auth />
    </Provider>
  );
};

export default App