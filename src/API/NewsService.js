import axios from "axios"

export default class NewsService {
    static async getAllNews() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
    }
}