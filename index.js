module.exports = {
  get stats () {
    // Make statistics available as 'stats' for shorthand
    return this.statistics
  },
  statistics: require('./src/statistics')
}
