import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './ColorSelector.scss'

class ColorSelector extends Component {
  constructor(props) {
    super(props)

    this.state = {
      colorSelectedIndex: null
    }
  }

  onColorSelected(index) {
    this.setState({
      colorSelectedIndex: index
    })
  }

  render() {
    const { colorSelectedIndex } = this.state;
    const { colors } = this.props;
    return (
      <div className="color-container">
        {colors !== null ? colors.map((c, i) => {
          return <div key={i}
            style={{ backgroundColor: c.colorName.replace(" ", "").toLowerCase() }}
            onClick={() => {
              this.onColorSelected(i);
              window.open(`/products/detail/${c.id}`, "_self");
            }}
            className={`cc-wrapper ${colorSelectedIndex === 1 ? 'cc-wrapper--selected' : ''}`}></div>
        }) : "warna lain tidak tersedia"
        }
      </div>
    )
  }
}

export default ColorSelector