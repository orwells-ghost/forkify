import axios from 'axios';
import { key, app_id } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            // const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            // this.result = res.data.recipes;
            const res = await axios(`https://api.edamam.com/search?q=${this.query}&app_id=${app_id}&app_key=${key}`)
            res.data.hits.forEach(hit => {
                hit.recipe.id = hit.recipe.uri.split('#')[1]
            })
            this.result = res.data.hits

        } catch (error) {
            alert(error);
        }
    }
}

