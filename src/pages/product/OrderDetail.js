import React, { Component } from "react";

import { getOrderById } from "../../api/";

class OrderDetail extends Component {
  state = {
    orderDetail: null
  };
  getParams = this.props.match.params.id;

  componentDidMount() {
    getOrderById(this.getParams);
  }

  render() {
    console.log(this.getParams);
    return <div>OrderDetail</div>;
  }
}

export default OrderDetail;
