export const formatDate = (dateAsString) => {
  let dateArray = dateAsString.split(' ')
  let formatedDate = []

  for (let i = 0; i < 4; i++) {
    formatedDate.push(dateArray[i])
  }

  return formatedDate.join(' ')
}