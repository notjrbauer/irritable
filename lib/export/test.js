var test = require('blue-tape')
var IrritableClient = require('../')
var token = process.env.ITERABLE_TOKEN

var Irritable = IrritableClient({
  token: token
})

test('export', function (t) {
  t.test('csv - valid input', () => {
    return Irritable.Export.csv({
      dataTypeName: 'emailSend',
      campaignId: 1
    }).then(t.ok)
  })

  t.test('csv - invalid input', () => {
    return Irritable.Export.csv({
      email: 'test@test.com',
      workflowId: 1
    }).catch(t.ok)
  })

  t.test('json - valid input', () => {
    return Irritable.Export.json({
      dataTypeName: 'emailSend',
      campaignId: 1
    }).then(t.ok)
  })

  t.test('json - invalid input', () => {
    return Irritable.Export.json({
      email: 'test@test.com',
      workflowId: 1
    }).catch(t.ok)
  })
})
