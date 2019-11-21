import React, { Component } from 'react'
import ListItems from '../../components/ListItems/ListItems'
import MyContext from '../../contexts/MyContext'
import { Section } from '../../components/Utils/Utils'
import EmmaApiService from '../../services/emma-api-service'

export class ItemsListPage extends Component {
    static contextType = MyContext 

    componentDidMount() {
        // this.context.clearError()
        EmmaApiService.getItems()
            .then(this.context.setAllitems)
    //         .catch(this.context.setError)

    }
    renderItems() {
        const {item = [] } = this.context
        console.log(item)
        return item.map( item => 
            <ListItems
            key={item.id}
            item={item}
            />
        )
    }
    render() {
        // const { error } = this.context
        const error = null

        return (
        <div>
            <Section list className='ItemsListPAge'>
                Your Items 
                {error
                ? <p className='red'> Error Occured</p>
                : this.renderItems()}
            </Section>
         </div>

        )
    }     
}



