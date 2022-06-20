const clone = require('./clone')

test('test clone - to be', () => {
  const i = [1, 2, 1]; 
  expect(clone(i)).toBe(i); 
})
test('test clone - to equal', () => {
  const i = [1, 2, 1]; 
  expect(clone(i)).toEqual(i); 
})