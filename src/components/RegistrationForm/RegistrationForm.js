import React, { Component } from 'react'

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
              <label htmlFor='email'>email</label>
              <input type="text" placeholder="enter email" name="email" required/>

              <label htmlFor="psw">Password</label>
              <input type="password" placeholder="Enter Password" name="psw" required/>

              <label htmlFor="psw-repeat"> Repeat Password</label>
              <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

              <button type="button" className="cancelbtn">Cancel</button>
              <button type="submit" className="submitbtn" >Sign Up</button>
            </form>
        </section>
        )
    }
}


