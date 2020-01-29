import React from 'react'
import Item from '../Items/Item'
import MyContext from '../contexts/MyContext'
import { findItem } from '../item-helpers'


export default class ItemPageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = MyContext

  handleDeleteItem = itemid => {
    this.props.history.push(`/`)
  }

  render() {
    // console.log('hello') 
    let { items=[] } = this.context
    const { itemid } = this.props.match.params
    console.log(items)
    items = findItem(items, itemid)
    
    return (
      <section className='ItemPageMain'>
        <Item
          itemid={items.id}
          name={items.name}
          onDeleteItem={this.handleDeleteItem}
        />
      </section>
    )
  }
}