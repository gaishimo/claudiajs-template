import assert from 'power-assert'
import echo from '../src/handlers'

describe('echo', () => {
  it('returns text', () => {
    assert(echo() === 'hello claudia.js with babel')
  })
})
