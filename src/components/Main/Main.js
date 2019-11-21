import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class MainPage extends Component {
    render() {
        
        return (
            
            <div className='App'>
              <nav className='App_nav'>
                {/* {this.()} */}
              </nav>
              <header className='App_header'>
                <h1>
                  <Link to='/login'>login/out</Link>
                  <Link to='/register'>Register</Link>
                  {' '}
                </h1>
              </header>
              <h1>Emma: Your Virtual Assistant</h1>
              <section>
                <h2>No more headaches from scouring your kitchen to see what you need!
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
           
              </main>
            </div>
        )
    }
}

export default MainPage
