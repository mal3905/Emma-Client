import React from 'react';
import MyContext from '../contexts/MyContext';
import config from '../config';
import './Item.css'


export default class Item extends React.Component {
  static defaultProps ={
    onDeleteItem: () => {},
  }
  static contextType = MyContext;

  handleClickDelete = e => {
    e.preventDefault()
    const itemId = this.props.itemId

    fetch(`${config.API_ENDPOINT}/items/${itemId}`, {
      method: 'DELETE',
      // headers: {
      //   'content-type': 'application/json'
      // },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        // return res.json()
      })
      .then(() => {
        this.context.deleteItem(itemId)
        // allow parent to perform extra behaviour
        this.props.onDeleteItem(itemId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { name } = this.props
    return (
      <div className='Item'>
        <h2 className='Item__title'>
          {/* <Link to={`/items/${itemId}`}> */}
            {name}
          {/* </Link> */}
        </h2>
        <button
          className='Item__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          {' '}
          remove
        </button>
      </div>
    )
  }
}
