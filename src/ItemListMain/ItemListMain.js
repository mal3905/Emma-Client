
import React from 'react'
import { Link } from 'react-router-dom'
import Item from '../Items/Item'
import MyContext from '../contexts/MyContext'
import { getItemsForCategory } from '../item-helpers'
import Button from '../Buttons/Button'
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
        <div class='home'>
          <Link to={'/'}>Home</Link>
        </div>
        <section>
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
        <div className='add-btn'>
          <Button 
            tag={Link}
            to='/add-item'
            type='button'
            className='Item__add-item-button'
          >
           +
          </Button>
        </div>
      </section>
    )
  }
}