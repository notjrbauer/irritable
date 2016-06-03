var test = require('blue-tape')
var IrritableClient = require('../')
var token = process.env.ITERABLE_TOKEN

var Irritable = IrritableClient({
  token: token
})

var fixture = {
  user: {
    email: 'test@test.com',
    userId: '123'
  }
}

test('Users', function (t) {
  t.test('updateEmail', () => {
    return Irritable.Users.updateEmail({
      currentEmail: fixture.user.email,
      newEmail: '10' + fixture.user.email
    })
      .then(t.ok)
  })

  t.test('updateEmail - invalid input', () => {
    return Irritable.Users.updateEmail({
      eventName: 'test',
      email: 'testnotvalid'
    }).catch(t.ok)
  })

  t.test('remove', () => {
    return Irritable.Users.remove({email: '10test@test.com'})
      .then(t.ok)
  })

  t.test('remove - invalid input', () => {
    return Irritable.Users.remove({
      eventName: 'test',
      email: 'testnotvalid'
    }).catch(t.ok)
  })

  t.test('update', () => {
    return Irritable.Users.update(fixture.user)
      .then(t.ok)
  })

  t.test('update - invalid input', () => {
    return Irritable.Users.update({
      email: 'invalid'
    })
      .catch(t.ok)
  })

  t.test('bulkUpdate', () => {
    return Irritable.Users.bulkUpdate({
      users: [fixture.user]
    }).then(t.ok)
  })

  t.test('bulkUpdate - invalid input', () => {
    return Irritable.Users.bulkUpdate({
      users: []
    }).catch(t.ok)
  })
})
