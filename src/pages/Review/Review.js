import React, { Component } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './Review.scss'

class Review extends Component {
    state = {
        review: []
    }

    componentDidMount() {
        const BASE_URL = process.env.REACT_APP_BASE_URL;
        axios.get(`${BASE_URL}/product/discussion/2`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then((res) => {
                console.log(res)
                if (res.data.length !== 0) {
                    this.setState({
                        review: res.data.data
                    })
                }
            })
    }

    renderReview = () => {
        const { review } = this.state;
        if (review !== null) {
            return review.map((item, i) => {
                return (
                    <div class="review-item" key={i}>
                        <div className="icon">
                            <FontAwesomeIcon icon={faUserCircle} style={{ height: "24px" }} />
                        </div>
                        <div>
                            <h3>{item.user.fullName}</h3>
                            <p >{item.discussion !== null ? item.discussion : "-"}</p>
                        </div>
                    </div>
                )
            })
        }

    }



    render() {
        console.log(this.state)
        return (
            <div className="content">
                <div className="section-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div>
                                    <h2>Review</h2>
                                    <p>Testimoni customer yang telah belanja di hias house</p>
                                </div>
                            </div>
                        </div>
                        <div className="contianer-review-list" >
                            {this.renderReview()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Review