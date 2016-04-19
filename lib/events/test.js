var test = require('blue-tape')
var IrritableClient = require('../')
var token = process.env.ITERABLE_TOKEN

var Irritable = IrritableClient({
  token: token
})

test('Events', function (t) {
  t.test('track', () => {
    return Irritable.Events.track({
      eventName: 'test',
      email: 'test@test.com'
    })
      .then(t.ok)
  })

  t.test('tracks - invalid input', () => {
    return Irritable.Events.track({
      eventName: 'test',
      email: 'testnotvalid'
    }).catch(t.ok)
  })

  t.test('trackPushOpen', () => {
    return Irritable.Events.trackPushOpen({
      campaignId: 2,
      email: 'test@test.com'
    })
      .then(t.ok)
  })

  t.test('trackPushOpen - invalid input', () => {
    return Irritable.Events.trackPushOpen({
      eventName: 'test',
      email: 'testnotvalid'
    }).catch(t.ok)
  })
})
