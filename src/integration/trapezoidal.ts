/**
 * @returns integration of given function within given limits.
 * @param func - Function to integrate
 * @param lowerLimit - Lower limit to integrate within.
 * @param upperLimit - Upper limit to integrate within.
 *
 * @example
 *```ts
 *trapezoidalRule(Math.log, 4, 5.2)

 *trapezoidalRule(func1, 0, 1)

 *const func1 = (arg0: number): number => {
 *  return 1 / (1 + arg0 * arg0)
 *}
 *```
 *
 * */
export function trapezoidalRule(
  func: (arg0: number) => number,
  lowerLimit: number,
  upperLimit: number
): number {
  const n: number = 60
  const h: number = (upperLimit - lowerLimit) / n

  let result: number = 0

  let x: number = lowerLimit

  result += func(x) / 2

  for (let i = 1; i <= n - 1; i++) {
    x += h

    result += func(x)
  }

  result += func(x + h) / 2

  result *= h

  return result
}
