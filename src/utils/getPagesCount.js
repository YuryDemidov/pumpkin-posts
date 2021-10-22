export const getPagesCount = (totalCount, limitPerPage) => {
  return Math.ceil(totalCount / limitPerPage)
}
