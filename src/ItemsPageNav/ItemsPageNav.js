import React from 'react'
import CuteButton from '../CuteButton/CuteButton'
import ApiContext from '../ApiContext'
import { findItem } from '../items-helpers'

export default class ItemsPageNav extends React.Component { 
    static defaultProps = {
        history: {
            goBack: () => { }

            },
            match: {
                params: {}
            }
        }

        static contextType = ApiContext;

        render() {
            const { items } = this.context
            const { itemId} = this.props.match.params
            const item = findItem(items, itemId) || {}

            return (
                <div className= 'ItemPageNav'>
                    <CuteButton
                    tag='button'
                    role='link'
                    onClick={() => this.props.history.goBack()}
                    >
                        <br />
                        Go Back please
                    </CuteButton>

                    <h3 className='ItemNavPage_category-name'>
                        [insert category name here]
                    </h3>
                </div>
            )
        
        }
}
