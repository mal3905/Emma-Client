
import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'
import MyContext from './MyContext'
import { getItemsForCategory } from './item-helpers'
import Button from './Button'
import './ItemListMain.css'


export default class ItemListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = MyContext

  render() {

    const { categoryid } = this.props.match.params
    const { items=[] } = this.context
    const itemsForCategory = getItemsForCategory(items, categoryid)
    // console.log(itemsForCategory)
    // console.log(items)
    // console.log(categoryid)
    // console.log(this.context.items) 

    return (
      <section className='ItemList'>
        <section>
            <h2>My List </h2>
        </section>
        <ul className='item-list'>
          {itemsForCategory.map(item =>
            <li key={item.id}>
              <Item 
                itemId={item.id}
                name={item.name}
                onDeleteItem={this.handleDeleteItem}
              />
            </li>
          )}
        </ul>
        <div className='ItemList__button-container'>
          <Button 
            tag={Link}
            to='/add-item'
            type='button'
            className='Item__add-item-button'
          >
            add item
          </Button>
        </div>
      </section>
    )
  }
}