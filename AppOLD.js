import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import AddItem from '../AddItem/AddItem'
import config from '../config' 
import ApiContext from '../ApiContext'
import LogIn from '../LogIn/LogIn'
import ListItems from '../ListItems/ListItems'

class App extends Component {
  state= {
    items: [],
    category:[],
  
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/items`),
    ])
    .then(([itemsRes]) => {
      if(!itemsRes.ok)
        return itemsRes.json().then(e => Promise.reject(e))
        return Promise.all([
          itemsRes.json(),
        ])
    })
    .then(([items]) => {
      this.setState({items})
    })
    .catch(error => {
      console.error({error})
    })
    
  }
  handleAddItem = item => {
    this.setState({
      items: [
        this.state.items, item 
      ]
    })
  }
  handleDeleteItem = itemId =>{
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    })
  }

  renderRoutes() {
    return (
      <>

      <Route 
        exact 
        path='/add-item'
        component={AddItem}
      />

      <Route  
        exact
        path='/register'
        component={RegistrationForm}
      />

      <Route
        exact 
        path='/login'
        component={LogIn}
      />

      <Route
        exact 
        path='/list'
        component={ListItems}
      />


    </> 
    )
  }

  render() {
    const value = {
      items: this.state.items,
      addItem: this.state.handleAddItem,
      deleteItem: this.state.handleDeleteItem,
    }
    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <nav className='App_nav'>
         
          </nav>
          <header className='App_header'>
            <h1>
              <Link to='/'>login/out</Link>
              {' '}
              {' '}
              <Link to='/'>Register</Link>
            </h1>
          </header>
          <section>
            <h2>No more headaches from scrouring your kitchen to see what you need!
            </h2>
            <p>With Emma, you can now save more time when when determining what you are running low on 
            and what you need to buy. </p>
        </section>
        <section>
            <h2>Start your list</h2>
            <p>You start out by creating your weekly grocery list with Emma and Emma will begin 
              learning how often you buy a product, and eventually start generating a tailored grocery 
              list for you based on how often you buy a product.</p>
        </section>
          <main className='App_main'>
            {this.renderRoutes()}
          </main>
        </div>
      </ApiContext.Provider>
    )
  }
}
      
                                      

export default App;