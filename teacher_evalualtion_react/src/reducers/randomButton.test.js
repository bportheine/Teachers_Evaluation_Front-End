import randomButton from './randomButton'

describe('randomButton reducer', () => {
  const reducer = randomButton
  const initialState = ['Student']

  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})
