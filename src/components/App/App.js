import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from '../Main/Main'
import LogInPage from '../../Routes/LogInPage/LogInPage'
import PublicOnlyRoute from '../../components/Utils/PublicOnlyRoute/PublicOnlyRoute'
import RegistrationPage from '../../Routes/RegistrationPage/RegistrationPage'
import PrivateRoute from '../Utils/PrivateOnlyRoute/PrivateRoute'
import ItemsListPage from '../../Routes/ItemsListPage/ItemsListPage'


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
                <Route
                    exact 
                    path={'/'}
                    component={Main}
                />

                <PublicOnlyRoute
                    path={'/login'}
                    component={LogInPage}
                />

                <PublicOnlyRoute
                    path={'/register'}
                    component={RegistrationPage}
                />
                <PublicOnlyRoute
                    path={'/category'}
                    component={ItemsListPage}
                />

            </Switch>
        </main>
        </div>
        )
    }
}

export default App
