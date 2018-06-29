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
      // Returns statistical mode. If multiple occurences at same frequency, returns smallest
      let modeMap = {}
      let maxEl = arr[0]
      let maxCount = 1
      arr.forEach((el, i) => {
        if(modeMap[el] == null) modeMap[el] = 1
        else
          modeMap[el]++
        if(modeMap[el] > maxCount)
        {
          maxEl = el
          maxCount = modeMap[el]
        }
      })
      return Object.keys(modeMap)
        .filter( key => modeMap[key] === maxCount)
        .sort((a, b) => b - a).pop()
    }
  }
}
