var test = require('blue-tape')
var IrritableClient = require('../')
var token = process.env.ITERABLE_TOKEN

var Irritable = IrritableClient({
  token: token
})

test('workflows', function (t) {
  t.test('triggerWorkflow', () => {
    return Irritable.Workflows.triggerWorkflow({
      email: 'test@test.com',
      workflowId: 3533
    }).then(t.ok)
  })

  t.test('triggerWorkflow - invalid input', () => {
    return Irritable.Workflows.triggerWorkflow({
      email: 'test@test.com',
      workflowId: 1
    }).catch(t.ok)
  })
})
