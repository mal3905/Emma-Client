import React, { Component } from 'react'
import Context from '../../contexts/Contexts'
import EmmaApiService from '../../services/emma-api-service'


export class ItemsForm extends Component {

    static contextType = Context

    handleSubmit = ev => {
        ev.preventDefault()
        const { item } = this.context
        const { item } = ev.target 

        EmmaApiService.postItem(category.id, item.value)
        .then(this.context.addItem)
        .then( () => {
            item.value = ''
        })
        .catch(this.context.setError)
    }

    render() {
        return (
          <form 
          className='add-item-form'
          onSubmit={this.handleSubmit}
          >
            <div className="container">
	
	            <h2>Choose Category</h2>
                <ul>
                    <li>
                        <input type="radio" id="f-option" name="selector">
                        <label for="f-option">Fridge</label>
            <div className="check"></div>

          </form>
        )
    }
}

export default ItemsForm
