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
                    <h3>About</h3>
                  <p>Emma helps you save more time when trying to figure out what you need. You start out by creating your weekly list of items and categorize them into as many categories as you see fit!
                    Over time you'll be able to check your list and see what you may need to buy  and easily create new lists.You can add or delete items and create new categories according to your needs!
                    Simply start by creating or selecting a category and add  items by clicking on the 'add item' button on the bottom of the page. Try it out!
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