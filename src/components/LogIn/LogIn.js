import React, { Component } from 'react'
import { Button, Input } from '../utils'


export default class LogIn extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
      }
    
      state = { error: null }
    
      handleSubmit= ev => {
        ev.preventDefault()
        const { email, password } = ev.target
    
        console.log('login form submitted')
        console.log({ email, password })

        email.value = ''
        password.value = ''
        this.props.onLoginSuccess()

      }
    render() {
        const { error } = this.state

        return (
             <form
        className='LoginForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='email'>
          <label htmlFor='LoginForm__email'>
            email
          </label>
          <Input
            required
            name='email'
            id='LoginForm__email'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Login
        </Button>
      </form>
        )
    }
}

