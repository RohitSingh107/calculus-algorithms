/**
 * @remarks
 * This is a numerical method.
 *
 * @returns differentiation of given function at given value.
 * @param fx - Function to differentiate.
 * @param x - Differentiate at this given value.
 * @param h - Optional parameter - step size to use.
 *
 * @example
 *```ts
 *centralDiff(Math.log, 7)

 *centralDiff(func1, 3, 0.0001)

 *const func1 = (arg0: number): number => {
 *  return 1 / (1 + arg0 * arg0)
 *}
 *```
 *
 * */
export const centralDiff = (
  fx: (arg0: number) => number,
  x: number,
  h: number = 0.0002
): number => {
  const df = (fx(x + h) - fx(x - h)) / (2 * h)

  return df
}
