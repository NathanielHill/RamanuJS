module.exports = {
  arithmetic: {
    median: (arr) => {
      arr = arr.sort((a, b) => a - b)
      let i = arr.length / 2
      return i % 1 == 0 ? (arr[i -1] + arr[i]) / 2 : arr[Math.floor(i)]
    }
  }
}
