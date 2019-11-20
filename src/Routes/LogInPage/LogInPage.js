import React, { Component } from 'react'
import Login from '../../components/LogIn/LogIn'
import { Section } from '../../components/Utils/Utils'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'

    // this is connected to the prvivateroute.js
    history.push(destination)
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <Login
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}