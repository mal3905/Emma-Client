import React, { Component } from 'react'
import ListCategory from '../../components/ListCategory/ListCategory'
import MyContext from '../../contexts/MyContext'
import { Section} from '../../components/Utils/Utils'
import EmmaApiService from '../../services/emma-api-service'



export default  class CategoryListPage extends Component {
    static contextType = MyContext 

    componentDidMount() {
        // this.context.clearError()
        EmmaApiService.getCats()
            .then(this.context.setAllCategories)
    //         .catch(this.context.setError)

    }
    renderCats() {
        const {category = [] } = this.context
        console.log(category)
        return category.map( cat => 
            <ListCategory
            key={cat.id}
            category={cat}
            />
        )
    }
    render() {
        // const { error } = this.context
        const error = null

        return (
        <div>
            <Section list className='CatListPAge'>
                Your Categories
                {error
                ? <p className='red'> Error Occured</p>
                : this.renderCats()}
            </Section>
         </div>

        )
    }     
}


