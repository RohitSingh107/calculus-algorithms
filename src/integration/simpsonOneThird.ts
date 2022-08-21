export function simpsonOneThird(
  func: (arg0: number) => number,
  lowerLimit: number,
  upperLimit: number
): number {
  const n: number = 6
  const h: number = (upperLimit - lowerLimit) / n

  let result: number = 0

  let x: number = lowerLimit

  result += func(x)

  for (let i = 1; i <= n - 1; i++) {
    x += h

    if (i & 1) {
      result += 4 * func(x)
    } else {
      result += 2 * func(x)
    }
  }

  result += func(x + h)

  result *= h
  result /= 3

  return result
}
