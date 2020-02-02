import React from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../contexts/MyContext'
import Button from '../Buttons/Button'
// import { countItemsForCategory} from './item-helpers'
import './ItemListNav.css'


export default class ItemListNav extends React.Component {
  static contextType = MyContext;

  render() {
    const { categories=[] } = this.context
    return (
      <div className='ItemListNav'>
        <div class='home'>
          <Link to={'/'}>Home</Link>
        </div>
        <ul className='ItemListNav__list'>
          {categories.map(categories =>
            <li key={categories.id}>
              <h1 className='cat-links'>
              <Link
                className='ItemListNav__category-link'
                to={`/category/${categories.id}`}
              >
                {/* <span className='ItemListNav__num-'>
                  {countItemsForCategory(items, categories.id)}
                </span> */}
                {categories.name}
              </Link>
              </h1>

            </li>
          )}
        </ul>
        <div className='ItemListNav__button-wrapper'>
          <Button
            tag={Link}
            to='/add-category'
            type='button'
            className='category-button'
          >
            Add Category
          </Button>
        </div>
      </div>
    )
  }
}