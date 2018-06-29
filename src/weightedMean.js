module.exports = (arr, weights) => {
  // should fail if arrays are not equal length

  let sum = 0
  let weightSum = 0

  arr.forEach((x, i) => sum += x * weights[i])
  weights.forEach(x => weightSum += x)

  let weightedMean = sum / weightSum

  return weightedMean.toFixed(1)
}
