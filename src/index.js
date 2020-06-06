// adding more listeners/watchers
// sudo sysctl fs.inotify.max_user_watches=524288
// 

//start json server
// json-server --watch db.json --port 3004

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import './index.css';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Routes/>
      </BrowserRouter>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
  );


