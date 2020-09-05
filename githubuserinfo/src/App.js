import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import GithubUser from './components/githubuser/GithubUser';

class App extends Component{
  render() {
    return (
      <div className='App'>
        <Header />
        <GithubUser />
      </div>
    );
  }
}

export default App;
