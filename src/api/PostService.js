import axios from 'axios'
import capitalize from '../utils/capitalize'

export default class PostService {
  static async getAll(page = 1, limit = 10) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      params: {
        _limit: limit,
        _page: page
      }
    })

    const posts = response.data
    posts.map(post => this._processPost(post))
    return response
  }

  static async getSingle(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    this._processPost(response.data)
    return response
  }

  static async getPostComments(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return response.data
  }

  static _processPost(post) {
    const now = Date.now()
    const timestamp = Math.floor(now - post.id * Math.round(now / 1000))
    post.initialId = post.id
    post.title = capitalize(post.title)
    post.body = capitalize(post.body)
    post.id = timestamp
    post.date = new Date(timestamp)
    return post
  }
}
