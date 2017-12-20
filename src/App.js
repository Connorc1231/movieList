import React, { Component } from 'react';
import MovieList from './MovieList.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.movies = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'},
    ];
    this.state = {
      onClick: this.onClick.bind(this),
      bgColor: 'black'
    }
  }
  onClick(movie) {
    this.setState({'bgColor': 'red'}); 
    console.log(movie)
  }
  render() {
    return (
      <div className="App" style={{width: '50%'}}>
        <MovieList movies={this.movies} onClick={this.state.onClick} bgColor={this.state.bgColor}/>
      </div>
    );
  }
}

export default App;