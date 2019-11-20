import React, { Component } from 'react'
import ItemForm from '../ItemForm/ItemForm'
import ApiContext from '../ApiContext'
import config from '../config'

export default class AddItem extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    static contextType = ApiContext;

    handleSubmit = e => {
        e.preventDefault()
        const newItem = {
            name: e.target['item-name'].value,

        }
        fetch(`${config.API_ENDPOINT}/items`, {
            method:'POST',
            headers: {
                'content-type': 'application-json'
            },
            bosy: JSON.stringify(newItem),
        })
        .then(res => {
            if(!res.ok)
              return res.json()
                .then(e => Promise.reject(e))
              return res.json()
        })
        .then(item => {
            this.context.AddItem(item)
            this.props.history.push(`/item/${item.item.id}`)
        })
        .catch(error => {
            console.log({ error })
        })
    }

    render() {
        return (
            <section className='AddItem'>
                <h2>Add a Food Item!</h2>
                <ItemForm onSubmit={this.handleSubmit}>
                    <div className='field'>
                        <label htmlFor='add-item-name'>Food Name</label>
                        <input type='text' id='add-item-name' name='item-name'/>
                    </div>
                    <div className='btns'>
                        <button type='submit'> + </button>
                    </div>
                </ItemForm>
            </section>
        )
    }
}