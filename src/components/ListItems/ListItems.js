import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class ListItems extends Component {
    render() {
        const { category } = this.props 

        return (
        <Link to={`/category/${category.id}`} className='cat_list'>
            <div ></div>
        </Link>
      
        
        )
    }
}

export default ListItems
