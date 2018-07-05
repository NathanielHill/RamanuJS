module.exports = (arr, weights) => {
  // should fail if arrays are not equal length
  // should default to weight of 1 (e.g unweighted)
  // possibly should be merged with mean() then

  let sum = 0
  let weightSum = 0

  arr.forEach((x, i) => {
    sum += x * weights[i]
    return sum
  })
  weights.forEach(x => {
    weightSum += x
    return weightSum
  })

  let weightedMean = sum / weightSum

  return weightedMean.toFixed(1)
}
