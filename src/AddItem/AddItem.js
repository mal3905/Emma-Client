import React, { Component } from 'react'
import MyContext from '../contexts/MyContext'
import config from '../config'
import Form from '../Form/Form'
import './AddItem.css'


export default class AddItem extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = MyContext;

  handleSubmit = e => {
    e.preventDefault()
    const newItem = {
      name: e.target['item-name'].value,
      categoryid: e.target['item-category-id'].value,
      // modified: new Date(),
    }
    fetch(`${config.API_ENDPOINT}/items`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newItem),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(item  => {
        this.context.addItem(item)
        this.props.history.push(`/`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { categories=[] } = this.context
    // console.log(categories)
    return (
      <section className='AddItem'>
        <h2 className='create-item'>Create Item</h2>
        <Form onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='item-name-input'>
            </label>
            <input type='text' id='item-name-input' name='item-name' placeholder='name' />
          </div>
          <div className='field'>
            <label htmlFor='item-category-select'></label>
            <select id='item-category-select' name='item-category-id'>
              <option value={null}>Select Category...</option>
              {categories.map(category =>
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              )}
            </select>
          </div>
            <button type='submit' class="submit-btn">
              Add
            </button>
        </Form>
      </section>
    )
  }
}