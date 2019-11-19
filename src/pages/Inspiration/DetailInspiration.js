import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import StarRatings from 'react-star-ratings'
import ShowMoreText from 'react-show-more-text'

import ProductCard from '../../components/card/Product'
import ColorSelector from '../../components/ColorSelector'
import { fetchProductByInspirationId } from '../../api'
import { formatMoneyWithoutSymbol } from '../../utils/money'
import { withContext } from '../../context/withContext'
import { isLogin } from '../../utils/auth'

class DetailInspiration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: null,
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        fetchProductByInspirationId(id)
            .then((res) => {
                this.setState({
                    product: res.data[0]
                })
            })
    }


    render() {
        const { product } = this.state;
        const { id } = this.props.match.params;
        return product !== null ? (
            <div>
                <Helmet key={Math.random()}>
                    <title>Inspiration Detail</title>
                    <meta property="og:title" content="Hias Homepage" />
                    <meta name="description" content="Hias" />
                    <meta name="robots" content="index, nofollow" />
                </Helmet>
                <div className="content">
                    <section className="section-page">
                        <div>Detail Inspiration</div>
                    </section>
                </div>
            </div>
        ) : null
    }
}

export default withContext(DetailInspiration)