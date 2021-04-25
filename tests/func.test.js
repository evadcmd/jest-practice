import func, {plusOne} from '../src/func'

test('test funcs', () => {
  expect(func()).toBe('Hello World!')
  expect(plusOne(0)).toBe(1)
})
