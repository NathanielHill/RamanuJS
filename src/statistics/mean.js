module.exports = (arr) => {
  let sum = 0
  arr.forEach((x) => {
    sum += x
  })
  return sum / arr.length
}
