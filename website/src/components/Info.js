import React from 'react'
import { css } from 'emotion'
import Modal from 'react-responsive-modal'

export class Info extends React.Component {
  state = { open: false }

  openModal = e => this.setState({ open: true })

  closeModal = e => this.setState({ open: false })

  render() {
    return (
      <React.Fragment>
        <div
          className={css`
            float: right;
            margin-top: -10px;
            cursor: pointer;
          `}
          onClick={this.openModal}
        >
          <i className="fas fa-info-circle" />
        </div>
        <Modal open={this.state.open} onClose={this.closeModal}>
          {this.props.children}
        </Modal>
      </React.Fragment>
    )
  }
}
