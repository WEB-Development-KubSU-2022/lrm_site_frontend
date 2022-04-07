import axios from "axios"

export default class NewsService {

    // static host = 'https://jsonplaceholder.typicode.com/posts'
    static host = 'http://192.168.1.95:8080'
    static path = '/news'
    // static format = '?format=json'
    static format = ''

    static async get() {
        const response = await axios.get(this.host + this.path + this.format)
        return response.data.data
    }

    static async getById(id) {
        const response = await axios.get(this.host + this.path + '/' + id)
        return [response.data.data]
    }

    static async add(post) {

        const config = {
            headers: {
                'x-token': JSON.parse(localStorage.getItem('token')),
                'user_id': JSON.parse(localStorage.getItem('id'))
            }
        }
        const response = await axios.post(this.host + this.path, post, config)
    }

    static async updateById(id, post) {
        const response = await axios.put(this.host + this.path + '/' + id, post)
    }

    static async deleteById(id) {
        const response = await axios.delete(this.host + this.path + '/' + id)
    }
}