import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import config from '../config'
import MyContext from '../MyContext'
import AddCategory from '../AddCategory'
import AddItem from '../AddItem'
import ItemListMain from '../ItemListMain'
import ItemPageNav from '../ItemPageNav'
import ItemListNav from '../ItemListNav'
import LandingPage from '../LandingPage' 
// import ItemPageMain from '../ItemPageMain'
import './App.css'




export default  class App extends Component {
        state={
            items: [],
            categories: [],
        }


        componentDidMount() {
            Promise.all([
                fetch(`${config.API_ENDPOINT}/items`),
                fetch(`${config.API_ENDPOINT}/category`)

            ])
            .then(([itemsRes, categoriesRes]) => {
                if (!itemsRes.ok)
                  return itemsRes.json().then(e => Promise.reject(e))
                if (!categoriesRes.ok)
                  return categoriesRes.json().then(e => Promise.reject(e))
        
                return Promise.all([
                  itemsRes.json(),
                  categoriesRes.json(),
                ])
              })
              .then(([items, categories]) => {
                this.setState({ items, categories })
           
              })
              .catch(error => {
                console.error({ error })
              })
          }



        handleAddCategory = category =>  {
            this.setState({
                 categories: [ ...this.state.categories, category]
                
            }) 
            // console.log(this.state)
        }
        
        handleAddItem= item =>  {
            this.setState({
                 items: [ ...this.state.items, item]
            })
            // console.log(this.state)
        }

        handleDeleteItem = itemid => {
            this.setState({
              items: this.state.items.filter(item => item.id !== itemid)
            })
          }
        

        renderNavRoutes() {
            return (
              <>
                {['/'].map(path =>
                  <Route
                    exact
                    key={path}
                    path={path}
                    component={LandingPage}
                  />
                )}

                {['/list', '/category/:categoryid'].map(path =>
                  <Route
                    exact
                    key={path}
                    path={path}
                    component={ItemListNav}
                  />
                )}
                <Route
                  path='/item/:itemId'
                  component={ItemPageNav}
                />
                <Route
                  path='/add-category'
                  component={ItemPageNav}
                />
                <Route
                  path='/add-item'
                  component={ItemPageNav}
                />
              </>
            )
        }
          
            
            renderRoutes() {
                return (
                    <>
                    {['/list', '/category/:categoryid'].map(path => 
                        <Route
                        exact
                        key={path}
                        path={path}
                        component={ItemListMain}
                      />
                    )}
                        {/* <Route
                        path='/item/:itemid'
                        component={ItemPageMain}
                        /> */}


                        <Route 
                        path='/add-category'
                        component={AddCategory}
                        />

                        <Route
                        path='/add-item'
                        component={AddItem}
                        />
                        
                    </>
                )
          }
        


    render() {

        const value = {
            items: this.state.items,
            categories: this.state.categories,
            addCategories: this.handleAddCategory,
            addItem: this.handleAddItem,
            deleteItem: this.handleDeleteItem,
   
        }

        return (
        <MyContext.Provider value={value}>
            <main className='App'>
                <header className='header'>
                <h1 className='title'>Emma</h1>
                <h2 className='sub-title'> Grocery List Assistant</h2>


                </header>
                <nav className='App__nav'>
                    {this.renderNavRoutes()}
                </nav>
                
               
                <section className='App__main'>
                    {this.renderRoutes()}
                </section>
                </main>
                </MyContext.Provider>
            
            
        )
    }
}

