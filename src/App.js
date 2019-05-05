import React, { Component } from 'react';
import styles from './App.css';


class App extends Component {
  render() {
    console.log(styles);
    return (
      <div className={styles.app}>
     hey
      </div> 
    );
  }
}

export default App;
