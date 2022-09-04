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
 *backwardDiff(Math.log, 7)

 *backwardDiff(func1, 3, 0.0001)

 *const func1 = (arg0: number): number => {
 *  return 1 / (1 + arg0 * arg0)
 *}
 *```
 *
 * */
export const backwardDiff = (
  fx: (arg0: number) => number,
  x: number,
  h: number = 0.0001
): number => {
  const df = (fx(x) - fx(x - h)) / h

  return df
}
