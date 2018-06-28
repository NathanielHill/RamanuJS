module.exports = {
  arithmetic: {
    mean: (arr) => {
      let sum = 0
      arr.forEach((x) => {
        sum += x
      })
      return sum / arr.length
    },
    median: (arr) => {
      arr = arr.sort((a, b) => a - b)
      let i = arr.length / 2
      return i % 1 == 0 ? (arr[i -1] + arr[i]) / 2 : arr[Math.floor(i)]
    },
    mode: (arr) => {
      // Returns mode. If multiple occurences at same frequency, returns smallest
      return arr.sort((a, b) => {
        arr.filter(x => x === b).length - arr.filter(x => x === a).length
      }).shift()
    }
  }
}
