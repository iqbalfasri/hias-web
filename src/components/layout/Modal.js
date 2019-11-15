import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './Modal.scss'

class Modal extends Component {
  handleModalOuterClick(e) {
    if (e.target.dataset.outer === 'true') {
      this.props.onCloseModal()
    }
  }

  render () {
    return this.props.isOpen ? (
      <div className="modal-container" onClick={(e) => this.handleModalOuterClick(e)} data-outer={true}>
        <div className="container" data-outer={true}>
          <div className="row justify-content-center align-items-center" data-outer={true}>
            <div className={ this.props.big ? 'col-md-12' : 'col-md-6' } data-outer={true}>
              <div className="modal-box">
                <div className="modal-close-button" onClick={this.props.onCloseModal}>
                  <span><FontAwesomeIcon icon={faTimes} /></span>
                </div>
                { this.props.children }
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null
  }
}

export default Modal