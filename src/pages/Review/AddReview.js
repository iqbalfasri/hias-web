import React, { Component } from 'react'

import { fetchProductByInspirationId, fetchWishList } from '../../api'
import { withContext } from '../../context/withContext'
import { isLogin } from '../../utils/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import InputText from '../../components/form/InputText'
import "./addReview.scss";

class AddReview extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rating: 0,
            reviewText: ""
        }
    }

    componentDidMount() {

    }

    renderRating = () => {
        return (
            <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
        )
    }


    render() {
        return (
            <div>
                <div className="content">
                    <section className="section-page">
                        <div className="container">
                            <div className="col-md-6">
                                <div>
                                    <h3>Add Reviews</h3>
                                    <p>Tambahkan testimoni pengalamanmu saat belanja di Hias house</p>
                                </div>
                            </div>
                            <h1></h1>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form--group">
                                            <label htmlFor="">Rating</label>
                                            <div>
                                                {this.renderRating()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form--group">
                                            <label htmlFor="">Review</label>
                                            <textarea className="text--area" type="text" placeholder="Tuliskan Review" value={this.state.message} onChange={this.onChangeMessage} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={this.sendMessage}
                                        className="btn btn--full btn--blue"
                                        style={{ maxWidth: "100%" }}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>)
    }
}

export default withContext(AddReview)