import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/store'; 
import Router from './router/router';
import 'toastr/build/toastr.min.css';
import { useTranslation } from 'react-i18next';
const store = createStore.create();
 
class App extends Component {
  constructor(props) {
    super(props); 
  }

 

  render() {
    return (
      <Provider store={store}>
       <Router />  
      </Provider>
    );
  }
}

export default App;
