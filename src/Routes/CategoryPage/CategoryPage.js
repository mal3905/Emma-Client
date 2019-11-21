import React, { Component } from 'react'
import MyContext from '../../contexts/MyContext'
import EmmaApiService from '../../services/emma-api-service'
import { Section } from '../../components/Utils/Utils'
import AddItemsForm from '../../components/AddItems/AddItemsForm'

export default class CategoryPage extends Component {
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = MyContext

    componentDidMount() {
        const { CategoryId } = this.props.match.params
        // this.context.clearError()
        EmmaApiService.getCat(CategoryId)
            .then(this.context.setCat)
            .catch(this.context.setError)
        EmmaApiService.getCatItems(CategoryId)
            .then(this.context.setItems)
            .catch(this.context.setError)
    }

    componentWillMount() {
        this.context.clearCat()
    }


    renderCat() {
        const { category, items } = this.context

        return (

            <div className='items-added'>
                <AddItemsForm/>
            </div>
        
    
        )


    }

    
}

