import React from 'react';
import {HashRouter} from 'react-router-dom'
import { Provider } from "react-redux"
import store from "./ducks/store"
import Header from './Components/Header'
import routes from './routes'
import './App.css';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App">
          <Header />
          {routes}
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
