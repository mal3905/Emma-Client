import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class ListItems extends Component {
    render() {
        const { items } = this.props 

        return (
        <Link to={`/items/${items.id}`} className='item_list'>
            <div >{items.name}</div>
        </Link>

        )
    }
}

export default ListItems
