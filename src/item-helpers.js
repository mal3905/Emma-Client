export const findCategory = (category=[], categoryid) =>
  category.find(category => category.id === categoryid)

export const findItem = (items=[], itemid) =>
  items.find(item => item.id+'' === itemid)

export const getItemsForCategory = (items=[], categoryid) => (
  (!categoryid)
    ? items
    : items.filter(item => item.categoryid+'' === categoryid)
)

export const countItemsForCategory = (items=[], categoryid) =>
  items.filter(item => item.categoryid === categoryid).length

