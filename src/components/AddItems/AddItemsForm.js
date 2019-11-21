import React, { Component } from 'react'
import MyContext from '../../contexts/MyContext'
import EmmaApiService from '../../services/emma-api-service'
import { Button, Input } from '../Utils/Utils'


export default class AddItemsForm extends Component {
    static contextType = MyContext

    handleSubmit = ev => {
        ev.preventDefault()
        const { category } = this.context
        const { item } = ev.target

        EmmaApiService.postItem(category.id, item.value)
            .then(this.context.postItem)
            .then(() => {
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
                <div className='item'>
                    <Input 
                        type='text'
                        placeholder="Enter item name" 
                        name="item" 
                        required>
                    </Input>
                </div>
                <Button type='submit'>
                    Create
                </Button>


            </form>
        )
    }
}

