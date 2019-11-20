import React, { Component } from 'react'
import ItemForm from '../ItemForm/ItemForm'
import ApiContext from '../ApiContext'
import config from '../config'




export  default class AddCategory extends Component {
    static defaultProps = {
        history: {
          push: () => { }
        },
      }

      static contextType = ApiContext;
     
      handleSubmit = e => {
        e.preventDefault()
        const category = {
          name: e.target['cat-name'].value
        }

        fetch(`${config.API_ENDPOINT}/category`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(category),
          })
          .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
            return res.json()
          })
          .then(category => {
            this.context.addCategory(category)
            this.props.history.push(`/category/${category.id}`)
          })
          .catch(error => {
            console.error({ error })
          })
      }

    render() {
        return (
            <section className='AddFolder'>
            <h2>Create category</h2>
            <ItemForm onSubmit={this.handleSubmit}>
              <div className='field'>
                <label htmlFor='cat-name-input'>
                  Name
                </label>
                <input type='text' id='cat-name-input' name='cat-name' />
              </div>
              <div className='buttons'>
                <button type='submit'>
                  Add Category
                </button>
              </div>
            </ItemForm>
          </section>
        )
    }
}