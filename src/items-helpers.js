

export const findItem = (items=[], itemId) =>
  items.find(item => item.id+'' === itemId)



export const findCategory = (categories=[], categoryid) =>
  categories.find(category => category.id === categoryid)

  export const getItemsForCategory = (items=[], categoryid) => (
    (!categoryid)
      ? items
      : items.filter(item => item.categoryid+'' === categoryid)
  )

