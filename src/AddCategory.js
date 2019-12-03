import React, { Component } from 'react'
import EmmaForm from './EmmaForm'
import MyContext from './MyContext'
import config from './config'
import './AddCategory.css'


export default class AddCategory extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = MyContext;

  handleSubmit = e => {
    e.preventDefault()
    const categories = {
      name: e.target['category-name-input'].value

    }
    // console.log(`for add ${categories}`)
    // console.log(this.name.value)
    // console.log()
    
    fetch(`${config.API_ENDPOINT}/category`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(categories),
    })
  
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      }) 
      .then(category => {
        this.context.addCategories({...categories, id: category.id})
        this.props.history.push(`/category/${category.id}`)
        // console.log(this.state)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    return (
      <section className='AddCategory'>
        <h2>Create Category</h2>
        <EmmaForm onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='category-name-input'>
             
            </label>
            <input type='text' id='category-name-input' name='category-name' placeholder='name'/>
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add category
            </button>
          </div>
        </EmmaForm>
      </section>
    )
  }
}