import { useMemo } from 'react'

export const useSortedPosts = (posts, sorting) => {
  return useMemo(() => {
    let compareFn
    switch (sorting.value) {
      case 'new':
      default:
        compareFn = (a, b) => (a.id > b.id ? -1 : 1)
        break
      case 'old':
        compareFn = (a, b) => (a.id < b.id ? -1 : 1)
        break
      case 'random':
        compareFn = () => Math.random() - 0.5
        break
      case 'alphabetical':
        compareFn = (a, b) => (a.title < b.title ? -1 : 1)
        break
    }
    return [...posts].sort(compareFn)
  }, [sorting, posts])
}

export const useFilteredPosts = (posts, sorting, term) => {
  const sortedPosts = useSortedPosts(posts, sorting)

  return useMemo(() => {
    if (!term) {
      return sortedPosts
    }
    return sortedPosts.filter(post => post.title.toLowerCase().includes(term.toLowerCase().trim()))
  }, [term, sortedPosts])
}
