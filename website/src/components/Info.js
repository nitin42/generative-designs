import React from 'react'
import { css } from 'emotion'
import Modal from 'react-responsive-modal'

export class Info extends React.Component {
  state = { open: false }

  toggleModal = e => this.setState(state => ({ open: !state.open }))

  render() {
    return (
      <React.Fragment>
        <div
          className={css`
            float: right;
            margin-top: -10px;
            cursor: pointer;
          `}
          onClick={this.toggleModal}
        >
          <i className="fas fa-info-circle" />
        </div>
        <Modal open={this.state.open} onClose={this.toggleModal}>
          {this.props.children}
        </Modal>
      </React.Fragment>
    )
  }
}
