module.exports = (input) => {
  // fugly. Use mean() function!
  let arr = input.sort((a, b) => a - b)
  let i = arr.length / 2
  let even = i % 1 === 0
  let Q_2 = even ? (arr[i - 1] + arr[i]) / 2 : arr[Math.floor(i)]

  let first_half = arr.splice(0, Math.floor(i))
  let second_half = even ? arr : arr.slice(1)

  i = first_half.length / 2
  even = i % 1 === 0
  let Q_1 = even ? (first_half[i - 1] + first_half[i]) / 2 : first_half[Math.floor(i)]

  i = second_half.length / 2
  even = i % 1 === 0
  let Q_3 = even ? (second_half[i - 1] + second_half[i]) / 2 : second_half[Math.floor(i)]

  return [Q_1, Q_2, Q_3]
}
