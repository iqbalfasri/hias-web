import React, { Component } from 'react'

import { fetchProductByInspirationId, fetchWishList } from '../../api'
import { withContext } from '../../context/withContext'
import { isLogin } from '../../utils/auth'

class Review extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inspiration: null,
            wishListItems: []
        }
    }

    componentDidMount() {

    }


    render() {
        const { inspiration } = this.state;
        return (
            <div>
                <div className="content">
                    <section className="section-page">
                        <div className="container">
                            <div className="row align-items-center mb--2">
                                <div>
                                    <h3 className="section-title mb--0">Reviews</h3>
                                </div>
                            </div>
                            <div className="row">
                            </div>
                        </div>
                    </section>
                </div>
            </div>)
    }
}

export default withContext(Review)