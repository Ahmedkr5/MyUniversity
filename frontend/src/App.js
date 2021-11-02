
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Main from './components/MainComponent';
import store from './Redux/Store';
import {Provider} from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <Router>
     
      <div className='App'>
          <Main/>
      </div>
    </Router>
    </Provider>
  );
}
export default App;