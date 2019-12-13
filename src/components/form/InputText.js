import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import './InputText.scss'

class InputText extends Component {
  constructor(props) {
    super(props)

    this.state = {
      iconClicked: false
    }
  }

  handleClickIcon() {
    this.setState({
      iconClicked: !this.state.iconClicked
    })
  }

  renderEye() {
    const { type } = this.props
    const { iconClicked } = this.state
    if (type === 'password') {
      return (
        <div className="input--icon" onClick={() => this.handleClickIcon()}>
          <span className="text--color-gray"><FontAwesomeIcon icon={iconClicked ? faEyeSlash : faEye} /></span>
        </div>
      )
    }
    return null
  }

  render() {
    const {
      type,
      placeholder,
      className
    } = this.props
    const { iconClicked } = this.state
    return (
      <div className="input-wrapper">
        <input required={this.props.required} onChange={this.props.onChange} value={this.props.value} type={iconClicked ? 'text' : type} placeholder={placeholder} className={`form--input ${className}`} />
        { this.renderEye() }
      </div>
    )
  }
}

export default InputText