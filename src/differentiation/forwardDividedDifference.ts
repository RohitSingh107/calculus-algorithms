export const forwardDiff = (
  fx: (arg0: number) => number,
  x: number,
  h: number = 0.0001
): number => {
  const df = (fx(x + h) - fx(x)) / h

  return df
}
