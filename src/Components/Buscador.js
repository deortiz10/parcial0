import React, { Component } from 'react';
import axios from 'axios';
 class Buscador extends Component {
	   constructor(props) {
    super(props);
    this.state = {value: '',
	              datos: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
    handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('se busca esta palabra: ' + this.state.value);
	axios.get('/flickr/'+this.state.value).then( response => {
	this.setState({
	datos: response.data.photos.photo
	});
	
	});
	
    event.preventDefault();
  }
	   getImagen(word)
{
  
}
  render() {
    return (
     
       <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Imagen a buscar:</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Flickr" />                    
                </div>
 
                <div className="form-group">
                    <button className="btn" type="submit">Busca el arcoiris</button>
                </div>
            </form>
    );
  }
}