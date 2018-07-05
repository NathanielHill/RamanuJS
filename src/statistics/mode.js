module.exports = (arr) => {
  // Returns statistical mode. If multiple occurences at same frequency, returns smallest
  let modeMap = {}
  let maxCount = 1
  arr.forEach((el, i) => {
    if (modeMap[el] == null) modeMap[el] = 1
    else {
      modeMap[el]++
    }
    if (modeMap[el] > maxCount) {
      maxCount = modeMap[el]
    }
  })
  return Object.keys(modeMap)
    .filter(key => modeMap[key] === maxCount)
    .sort((a, b) => b - a).pop()
}
