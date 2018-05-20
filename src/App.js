import React, { Component } from 'react';
import FrontPage from './pages/frontPage';
import SnowStorm from 'react-snowstorm';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: 'teal', height: '100vh', width: 'auto' }}>
          <SnowStorm excludeMobile={false} />
          <FrontPage />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
