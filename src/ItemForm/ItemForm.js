import React, { Component } from 'react'

export default class AddItemForm extends Component {
  onSubmitForm = (e) => {
    this.props.onAddItem(e.target.itemToAdd.value)
  }
  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <h2>Choose Category</h2>
        <ul>
          <li>
            <input type="radio" 
            id="f-option" 
            name="selector"/>
            <label htmlFor="f-option">Fridge</label>
            <div className="check"></div>
          </li>

          <li>
            <input 
            type="radio" 
            id="s-option" 
            name="selector"/>
            <label htmlFor="s-option">Pantry</label>
          </li>

          <label htmlFor="itemToAdd">item name</label>
          <input
          type='text'
          name='itemToAdd'
          placeholder='cereal'
          aria-label='Grocery list item'
          required
          />
          {/* <input type="button" 
          id="add-btn" 
          value="+"
          aria-label='Grocery list item'/> */}
          <input type="submit" 
          id="add-btn" 
          value="create" 
          aria-label='Grocery list item'/>
        </ul>
      </form>
    )
  }
}


//component to display a form.