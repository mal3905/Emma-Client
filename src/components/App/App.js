import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../Utils/PrivateRoute'


export class App extends Component {
    state = {hasError: false}

    static getDerivedStateFromError(error) {
        console.error(error)
        return { hasError: true }

    }


    render() {
        return (
        <div className='App'>
        <header className='App__header'>
          {/* <Header /> */}
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>Error!</p>}
            <Switch>
          
                <PrivateRoute
                path={'/list/listid'}
                component={}
                />

            </Switch>
        </main>
        </div>
        )
    }
}

export default App
