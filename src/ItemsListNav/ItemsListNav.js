  
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import CuteButton from '../CuteButton/CuteButton'

export default class ItemsListNav extends React.Component {
    static contextType = ApiContext;

    render() {
        const { items=[] } = this.context
        return (
            <div className='ItemsListNav'>
                {/* <ul className='ItemsListNav_list'>
                    {categories.map(category => 
                        <li key={category.id}>
                            <NavLink className='ItemsListNav_category-link'
                            to={`/category/${category.id}`}
                            >
                            
                            <span className='ItemsListNav_num-items'>
                                {countItemsforCategory(items, category.id)}

                            </span>
                            {categpry.name}
                            </NavLink>
                        </li>
                    )}
                </ul> */}

                <div className='ItemsListNav_btn-wrapper'>
                    <CuteButton 
                        tag={Link}
                        to='add-category'
                        type='button'
                        className='ItemsListNav_add-categor-btn' 
                    >
                    Add Category
                    </CuteButton>
                </div>
            </div>
  
        )
    
    
    }
}

