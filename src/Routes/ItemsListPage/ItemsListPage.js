import React, { Component } from 'react'
import ListItems from '../../components/ListItems/ListItems'
import Context from '../../contexts/Contexts'
import { Section} from '../../components/Utils/Utils'
import EmmaApiService from '../../services/emma-api-service'


export default  class ItemsListPage extends Component {
    static contextType = Context 

    componentDidMount() {
        this.context.clearError()
        EmmaApiService.getCats()
            .then(this.context.setCatList)
            .catch(this.context.setError)

    }
    renderCats() {
        const {categoryList = [] } = this.context 
        return categoryList.map( cat => 
            <ListItems
            key={cat.id}
            item={cat}
            />
        )
    }

    render() {
        const { error } = this.context

        return (
            <Section list className='CatListPAge'>
                {error
                ? <p className='red'> Error Occured</p>
                : this.renderCats()}
            </Section>
        )
    }

      
}


