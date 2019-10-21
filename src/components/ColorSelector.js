import React, { Component } from 'react'

import './ColorSelector.scss'

class ColorSelector extends Component {
  constructor (props) {
    super(props)

    this.state = {
      colorSelectedIndex: null
    }
  }

  onColorSelected (index) {
    this.setState({
      colorSelectedIndex: index
    })
  }

  render () {
    const { colorSelectedIndex } = this.state
    return (
      <div className="color-container">
        <div onClick={() => this.onColorSelected(1)} className={`cc-wrapper color--blue ${colorSelectedIndex === 1 ? 'cc-wrapper--selected' : ''}`}></div>
        <div onClick={() => this.onColorSelected(2)} className={`cc-wrapper color--black ${colorSelectedIndex === 2 ? 'cc-wrapper--selected' : ''}`}></div>
        <div onClick={() => this.onColorSelected(3)} className={`cc-wrapper color--green ${colorSelectedIndex === 3 ? 'cc-wrapper--selected' : ''}`}></div>
        <div onClick={() => this.onColorSelected(4)} className={`cc-wrapper color--orange ${colorSelectedIndex === 4 ? 'cc-wrapper--selected' : ''}`}></div>
      </div>
    )
  }
}

export default ColorSelector