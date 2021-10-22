import axios from 'axios'

export default class PostService {
  static async getAll() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const posts = response.data

    posts.map(post => {
      const now = Date.now()
      const timestamp = Math.floor(now - Math.random() * Math.round(now / 10))
      post.id = timestamp
      post.date = new Date(timestamp)
      return post
    })

    return posts
  }
}
