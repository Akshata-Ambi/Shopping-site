import React, { Component } from 'react';
import styles from './App.css';
import Navbar from './components/Navbar'


class App extends Component {
  render() {
    return (
      <div className={styles.app}>
      <Navbar/>
      </div> 
    );
  }
}

export default App;
