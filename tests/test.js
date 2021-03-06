import test from 'tape'
import debounce from '../src/debounce'

test('Handles defaults', t => {
  const runner = debounce((val) => {
    t.ok(val)
    t.same(val, 'testing')
    t.end()
  })

  runner('testing')
})

test('Handles number type', t => {
  const runner = debounce(val => {
    t.ok(val)
    t.same(val, 'testing')
    t.end()
  }, 400)

  runner('testing')
})

test('Handles no format set', t => {
  const runner = debounce(val => {
    t.ok(val)
    t.same(val, 'testing')
    t.end()
  }, '500')

  runner('testing')
})

test('Handles sepcific time', t => {
  const runner = debounce((val) => {
    t.ok(val)
    t.same(val, 'testing')
    t.end()
  }, '500ms')

  runner('testing')
})

test('Handles seconds', t => {
  const runner = debounce((val) => {
    t.ok(val)
    t.same(val, 'testing')
    t.end()
  }, '1s')

  runner('testing')
})
