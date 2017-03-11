 import React, { Component } from 'react';
 class imagen extends Component {
	 getUrl() {
  return "https://farm"+
   this.props.photo.farm +
   ".staticflickr.com/" +
   this.props.photo.server +
   "/"+
   this.props.photo.id+
   "_" +
   this.props.photo.secret +
   "_s.jpg";
 }
  render() {
    return (
     <div>
        <div className="imagenflick">
          <img src={this.getUrl()} className="App-logo" alt="logo" />
          
        </div>
        
      </div>
    );
  }
}
 
 
 
 
 