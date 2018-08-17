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
            margin: 10px;
            cursor: pointer;
          `}
          onClick={this.openModal}
        >
          <i className="fas fa-info-circle" />
        </div>
        <Modal open={this.state.open} onClose={this.closeModal}>
          <div
            className={css`
              padding: 10px;
              font-size: 1.2em;
              width: 350px;
              line-height: 1.5;
            `}
          >
            <p>Hello 👋</p>
            <p>
              You will find a collection of generative designs on the home page.
              Interact with a design by clicking on the play icon. Clicking on
              the play icon will start the animation.
            </p>
            <h3>Parameterization</h3>
            <p>
              To be able to create a bridge between transformation and
              visualization, you can click on a design to pop-up a details page.
              On the details page, you will find a list of controls to change
              the parameters of a design. Use of parameters defines a system of
              visualization and simulation.
            </p>
          </div>
        </Modal>
      </React.Fragment>
    )
  }
}
