import React, { Component } from 'react'
import { Button, Input, Required} from '../Utils/Utils'

export default class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    state = { error: null}

    handleSubmit = ev => {
        ev.preventDefault()
        const { email, password } = ev.target

        console.log('form has been successfully submitted! ')
        console.log( email, password)

        email.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
    }

    render() {
        const { error } = this.state 
        return (
            <section > 
            <form onSubmit={this.handleSubmit}
                  className="signup-form">
            <div role='alert'>
                {error && <p className='red'>{error}</p>}
            </div>

              <h2>Sign me Up!</h2>

              <label htmlFor='email'>
                  email <Required/>
              </label>
              <Input 
              type="text" 
              placeholder="enter email" 
              name="email" 
              required>
              </Input>

              <label htmlFor='password'>
                  Password <Required /> 
              </label>
              <Input 
              type="password" 
              placeholder="Enter Password" 
              name="password" 
              required>
              </Input>

              <Button type="submit" 
              className="submitbtn">
              Sign Up
              </Button>

            </form>
        </section>
        )
    }
}


