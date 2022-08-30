export const backwardDiff = (
  fx: (arg0: number) => number,
  x: number,
  h: number = 0.0001
): number => {
  const df = (fx(x) - fx(x - h)) / h

  return df
}
