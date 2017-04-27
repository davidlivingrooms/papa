// @flow
import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import './SplitPane.css';

export default class Home extends Component {
  render() {

    return (
      <SplitPane split="vertical" defaultSize="33%">
      <div />
      <SplitPane split="vertical" defaultSize="50%">
      <div />
      <div />
      </SplitPane>
      </SplitPane>
  );

    // return (
    //   <div>
    //     <div className={styles.container} data-tid="container">
    //       <h2>Home</h2>
    //       <Link to="/counter">to Counter</Link>
    //     </div>
    //   </div>
    // );
  }
}
