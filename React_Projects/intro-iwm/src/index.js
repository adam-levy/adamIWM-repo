import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import './style.css';


class App extends Component {

  render() { 
    return ( 

      <div>
        <Helmet>
          <title>Introduction Website</title>
        </Helmet>
        <Header />
        
      </div> 
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
 
export default App;