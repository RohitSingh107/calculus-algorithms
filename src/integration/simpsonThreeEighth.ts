export function simpsonThreeEighth(
  func: (arg0: number) => number,
  lowerLimit: number,
  upperLimit: number
): number {
  const n: number = 60
  const h: number = (upperLimit - lowerLimit) / n

  let result: number = 0

  let x: number = lowerLimit

  // Adding First f(x)
  result += func(x)

  for (let i = 1; i <= n - 1; i++) {
    x += h

    if (i % 3) {
      result += 3 * func(x)
    } else {
      result += 2 * func(x)
    }
  }

  // Adding Last f(x)
  result += func(x + h)

  result *= 3 * h
  result /= 8

  console.log(`simpsonThreeEighth result: ${result}`)
  return result
}
