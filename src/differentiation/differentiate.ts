const diffTerm = (term: string): string => {
  let result: string = ""

  let coeffStr: string = ""

  let i = 0

  for (i = 0; term[i] != "x"; i++) {
    if (term[i] == " ") {
      continue
    }
    coeffStr += term[i]
  }
  let coeff = parseInt(coeffStr)

  let powStr = ""
  for (i = i + 2; i != term.length && term[i] != " "; i++) {
    powStr += term[i]
  }
  let power = parseInt(powStr)

  coeff = coeff * power
  // console.log(`coeff is ${coeff}`)

  coeffStr = coeff.toString()
  // console.log(`coeffStr is ${coeffStr}`)

  powStr = (power - 1).toString()

  result += coeffStr + "x^" + powStr

  return result
}

/**
 * @remarks
 * This is a not a numerical method.
 *
 * @returns differentiation of given expression.
 * @param expression - Expression to differentiate.
 *
 * @example
 *```ts
 *diff("4x^3 - 3x^1 + 2x^2")
 *```
 *
 * */
export const diff = (expression: string): string => {
  let result: string = ""

  // const expSplit = expression.split(/[+-]+/)
  const expSplit = expression.split(" ")

  let i: number = 0
  while (i < expSplit.length) {
    if (expSplit[i] == "+") {
      result += " + "
      i++
      continue
    }

    if (expSplit[i] == "-") {
      result += " - "
      i++
      continue
    }

    result += diffTerm(expSplit[i])
    i++
  }

  return result
}
