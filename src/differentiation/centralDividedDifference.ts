export const centralDiff = (
  fx: (arg0: number) => number,
  x: number,
  h: number = 0.0002
): number => {
  const df = (fx(x + h) - fx(x - h)) / (2 * h)

  return df
}
