import React from 'react';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import {Provider} from  'react-redux';
import {ConfigureStore} from './redux/store/configStore'
import Main from './pages/Main';

const store = ConfigureStore()

function App() {
  return (
    <div >
        <Provider store={store}>
        <Main/>
      </Provider>
    </div>
  );
}

export default App;
