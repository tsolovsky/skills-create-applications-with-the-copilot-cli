const { add, sub, mul, div } = require('../calculator');

describe('Calculator functions', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(sub(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(mul(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(div(20, 5)).toBe(4);
  });

  test('division by zero returns Infinity', () => {
    expect(div(1, 0)).toBe(Infinity);
  });

  test('works with negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
    expect(sub(-2, 3)).toBe(-5);
    expect(mul(-4, 2)).toBe(-8);
    expect(div(-10, 2)).toBe(-5);
  });

  test('works with floating point numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.30000000000000004);
    expect(div(1, 3)).toBeCloseTo(1/3);
  });
});
