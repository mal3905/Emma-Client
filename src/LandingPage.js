import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (

            <main>
                <section className= 'landing-page'>
                    <h1> Emma: Your Shopping List Assistant</h1>
                    <h3>No more headaches from scrouring your kitchen to see what you need!</h3>
                  <p>With Emma, you can now save more time when when determining what you are
                   running low on and what you need to buy. </p>
                  <p>You start out by creating your weekly grocery list with Emma and be able to see how often you are buying
                    certain products. Over time you'll be able to check your list and see what you may need to buy 
                    and easily create new lists.</p>
                    <p>You can add or delete items and create new categories according to your needs!</p>

                    <p>Simply start by creating or selecting a category and add  items by clicking on the 'add item' button
                      on the bottom of the page. Try it out!
                    </p>
                    <div className='enter'
                            tag='button'
                            role='link'>
                        <Link to={'/list'}>Enter</Link>
                    </div>
                </section>
                
                <footer className='footer' > @Copyright 2020</footer>
            </main>
        )
    }
}

export default LandingPage; 