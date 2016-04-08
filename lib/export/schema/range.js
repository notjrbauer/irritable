var validator = require('is-my-json-valid')

var enums = [
  'Today',
  'Yesterday',
  'BeforeToday',
  'All'
]

module.exports = validator({
  required: true,
  type: 'string',
  enum: enums
})
