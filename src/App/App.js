import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import config from '../config'
import MyContext from '../MyContext'
import AddCategory from '../AddCategory'
import AddItem from '../AddItem'
import ItemListMain from '../ItemListMain'
import ItemPageNav from '../ItemPageNav'
import ItemListNav from '../ItemListNav'
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
                {['/', '/category/:categoryid'].map(path =>
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
                    
                    {['/', '/category/:categoryid'].map(path => 
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
                <h3>No more headaches from scrouring your kitchen to see what you need!</h3>
                  <p>With Emma, you can now save more time when when determining what you are
                   running low on and what you need to buy. </p>
                  <p>You start out by creating your weekly grocery list with Emma and be able to see how often you are buying
                    certain products. Over time you'll be able to check your list and see what you may need to buy 
                    and easily create new lists.</p>
                    <p>You can add or delete items and create new categories according to your needs!</p>

                    <p>Simply start by creating or selecting a category and add  items by clicking on the 'add item' button
                      on the bottom of the page.
                    </p>


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

