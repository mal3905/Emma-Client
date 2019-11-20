import React from 'react';
import { Link } from 'resct-router-dom'
import ApiContext from '../ApiContext'
import config from '../config'



export default class Item extends React.Component(props) {
  static defaultProps = {
    onDeleteItem: () => {},  
  }
  static contextType  = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const itemId = this.props.itemId

    fetch(`${config.API_ENDPOINT}/items/${items}`, {
      method: 'DELETE',
    })

  }
  return (
    <div className='item'>

    
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}