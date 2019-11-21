import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from '../Main/Main'
import LogInPage from '../../Routes/LogInPage/LogInPage'
import PublicOnlyRoute from '../../components/Utils/PublicOnlyRoute/PublicOnlyRoute'
import RegistrationPage from '../../Routes/RegistrationPage/RegistrationPage'
import PrivateRoute from '../Utils/PrivateOnlyRoute/PrivateRoute'
import CategoryListPage from '../../Routes/CategoryListPage/CategoryListPage'
import CategoryPage from '../../Routes/CategoryPage/CategoryPage'
import MyContext from '../../contexts/MyContext'


export class App extends Component {
    state = {
        category: [],
        hasError: false
    }

    static getDerivedStateFromError(error) {
        console.error(error)
        return { hasError: true }

    }
    setAllCategories = category => {
        this.setState({category})
    }

    render() {
        const value = {
          category: this.state.category,
          setAllCategories: this.setAllCategories
          }
        return (
            <MyContext.Provider value={value}>
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
                    component={CategoryListPage}
                />
                <PublicOnlyRoute
                    path={'/items'}
                    component={CategoryListPage}
                />

                <PublicOnlyRoute
                    path={'/category/:categoryId'}
                    component={CategoryPage}
                />

            </Switch>
        </main>
        </div>
        </MyContext.Provider>
        )
    }
}

export default App
