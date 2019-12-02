import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ColorSelector.scss";

class ColorSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorSelectedIndex: null
    };
  }

  onColorSelected(index) {
    this.setState({
      colorSelectedIndex: index
    });
  }

  render() {
    const { colorSelectedIndex } = this.state;
    const { colors } = this.props;
    return (
      <div style={{ color: "#6c6e70" }} className="color-container">
        {colors !== null
          ? colors.map((c, i) => {
              return (
                <Link
                  key={i}
                  style={{
                    backgroundColor: c.colorName.replace(" ", "").toLowerCase()
                  }}
                  onClick={() => {
                    // this.onColorSelected(i);
                    // window.open(`/products/detail/${c.id}`, "_self");
                  }}
                  to={`/products/detail/${c.id}`}
                  className={`cc-wrapper ${
                    colorSelectedIndex === 1 ? "cc-wrapper--selected" : ""
                  }`}
                />
              );
            })
          : "warna lain tidak tersedia"}
      </div>
    );
  }
}

export default ColorSelector;
