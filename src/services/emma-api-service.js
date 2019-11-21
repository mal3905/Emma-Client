import TokenService from '../services/token-service'
import config from '../config'

const EmmaApiService = {
    
    //Get all Categories 
    getCats() {
        return fetch(`${config.API_ENDPOINT}/category`, {
            headers: {

            },

        })
        .then(res => 
            (!res.ok)
            ?res.json().then(e => Promise.reject(e))
            : res.json())
    },
    //Get category by id
    getCat(categoryid) {
        return fetch(`${config.API_ENDPOINT}/Category/${categoryid}`, {
            headers: {
                'authorization': `basic${TokenService.getAuthToken()}`,
            },
        })
        .then(res => 
            (!res.ok)
            ?res.json().then(e => Promise.reject(e))
            :res.json())
    },

    getCatItems(categoryid) {

        return fetch(`${config.API_ENDPOINT}/Category/${categoryid}/items`, {
            headers: {
                'authorization' : `basic ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json())
    },

    postItem(catId, text) {
        return fetch(`${config.API_ENDPOINT}/items`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                cat_id: catId,
                text, 
            }),
        })
        .then(res => 
            (!res.ok)
            ?res.json().then(e => Promise.rejecy(e))
            :res.json())
    }


}

export default EmmaApiService