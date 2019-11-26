import React from 'react'
import Item from './Item'
import MyContext from './MyContext'
import { findItem } from './item-helpers'


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
    const { items=[] } = this.context
    const { itemid } = this.props.match.params
    const item = findItem(items, itemid) 
    return (
      <section className='ItemPageMain'>
        <Item
          itemid={item.id}
          name={item.name}
          onDeleteItem={this.handleDeleteItem}
        />
      </section>
    )
  }
}