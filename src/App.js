import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Imagen from './Components/imagen.js';
import Buscador from './Components/Buscador.js';
class App extends Component {
  render() {
    return (
	<div>
	 <div className="col-md-8">
        <h1> Flickr Rainbow </h1>
        <p> TASTE THE RAINBOW </p>
		<br>
		</br>
		
		</div>
		<div id="parent">
		<div className="col-md-1">
		<Buscador/>
		</div>
             </div> 
     </div>
    );
  }
}

export default App;
