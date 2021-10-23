import axios from 'axios'

export default class PostService {
  static async getAll(page = 1, limit = 10) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      params: {
        _limit: limit,
        _page: page
      }
    })
    const posts = response.data

    posts.map(post => {
      const now = Date.now()
      const timestamp = Math.floor(now - post.id * Math.round(now / 1000))
      post.id = timestamp
      post.date = new Date(timestamp)
      return post
    })

    return response
  }
}
