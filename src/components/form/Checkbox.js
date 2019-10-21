import React, { Component } from 'react'

import './CheckBox.scss'

class Checkbox extends Component {
  render() {
    const { text, id, name } = this.props
    return (
      <div className="fx align-items-center">
        <div className="checkbox-input-wrapper">
          <input type="checkbox" id={id} name={name} className="form--checkbox" />
          <div className="form--checkbox-fake"></div>
        </div>
        <div>
          <label htmlFor={id} className="text--size-12 text--color-gray mb--0" style={this.props.textStyle}>{ text }</label>
        </div>
      </div>
    )
  }
}

export default Checkbox