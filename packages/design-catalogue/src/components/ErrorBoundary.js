import React from 'react'

export class ErrorBoundary extends React.Component {
  state = { hasError: false }

  componentDidCatch(error, info) {
    console.clear()
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <React.Fragment>{this.props.fallbackUI}</React.Fragment>
    }
    return this.props.children
  }
}
