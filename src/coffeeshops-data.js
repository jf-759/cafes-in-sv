import data from './coffeeshops-data.json'

data.forEach((obj, i) => {
  obj.id = i
})

export default data