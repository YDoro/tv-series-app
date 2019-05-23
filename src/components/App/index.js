import React from 'react';
import Intro from '../intro'
import './App.css';
import 'whatwg-fetch';
class App extends React.Component {
  state = {
    series: []
  }
  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
      .then((response) => response.json())
      .then(json => this.setState({ series: json }))
  }
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message='Here you can find all of your favorite series!' />
        The number of series on this site is: {this.state.series.length}
      </div >
    );
  }
}

export default App;
