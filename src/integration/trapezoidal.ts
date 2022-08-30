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
