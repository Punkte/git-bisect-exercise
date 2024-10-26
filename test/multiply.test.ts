import {describe, expect, it} from 'vitest'
import {multiply} from '../src/calculator/multiply'

type TestCase = {numbers: [number, number], expected: number};
describe('multiplications', () => {
  it
    .each<TestCase>([
      {numbers: [1,1], expected: 1},
      {numbers: [1,2], expected: 2},
      {numbers: [1,3], expected: 3},
      {numbers: [1,4], expected: 4},
      {numbers: [1,5], expected: 5},
    ])
    ('should multiply numbers', ({numbers, expected}) => {
      expect(multiply(...numbers)).toEqual(expected)
    })
})