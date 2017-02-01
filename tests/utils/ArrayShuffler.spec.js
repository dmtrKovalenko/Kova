import shuffle from 'utils/ArrayShuffler'

describe('(ArrayShuffler)', () => {
  const initialArray = [21, 21, 1, 2, 5, 6]
  const shuffledArray = shuffle(initialArray)

  it('Should not mutate an array.', () => {
    expect(initialArray).to.be.not.equal(shuffledArray)
  })

  it('Should random shuffle an array.', () => {
    expect(initialArray).to.be.not.deep.equal(shuffledArray)
  })
})
