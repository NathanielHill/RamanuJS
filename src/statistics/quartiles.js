module.exports = (input) => {
  // fugly. Use mean() function!
  let arr = input.sort((a, b) => a - b)
  let i = arr.length / 2
  let even = i % 1 === 0
  let Q_2 = even ? (arr[i - 1] + arr[i]) / 2 : arr[Math.floor(i)]

  let firstHalf = arr.splice(0, Math.floor(i))
  let secondHalf = even ? arr : arr.slice(1)

  i = firstHalf.length / 2
  even = i % 1 === 0
  let Q_1 = even ? (firstHalf[i - 1] + firstHalf[i]) / 2 : firstHalf[Math.floor(i)]

  i = secondHalf.length / 2
  even = i % 1 === 0
  let Q_3 = even ? (secondHalf[i - 1] + secondHalf[i]) / 2 : secondHalf[Math.floor(i)]

  return [Q_1, Q_2, Q_3]
}
