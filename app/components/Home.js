// @flow
import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import './SplitPane.css';
import SimpleMDE from 'react-simplemde-editor'
import './simplemde.min.global.css'
import './editorStyles.global.css'

export default class Home extends Component {


  // constructor () {
  //   super()
  //   this.state = {
  //     panelSize: 200
  //   }
  // }

  // onClickHandler = () => {
  //   setInterval(() => {
  //     this.setState({panelSize: this.state.panelSize - 10})
  //   }, 10)
  // }

  handleEditorChange = (value) => {
    console.log(value)
  }


  render() {

    return (
      <SplitPane split="vertical" defaultSize={150} minSize={150}>
        <div>
          <p>1</p>
        </div>
        <SplitPane split="vertical" defaultSize={200} minSize={200}>
          <div>
            <p>2</p>
          </div>
          <div>
            <SimpleMDE
              onChange={this.handleEditorChange}
            />
          </div>
        </SplitPane>
      </SplitPane>
    )
  }
}
