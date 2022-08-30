import { assert } from "chai"
import { backwardDiff } from "../src/differentiation/backwardDividedDifference"
const DECIMAL_PLACES = 4

const func1 = (arg0: number): number => {
  return 1 / (1 + arg0 * arg0)
}

const func2 = (arg0: number): number => {
  return Math.sqrt(Math.sin(arg0))
}

describe("Backward Divided Difference", function () {
  describe("1 / (1 + x^2)", () => {
    it("should be close to given value", () => {
      assert.equal(
        backwardDiff(func1, 3, 0.0001).toFixed(DECIMAL_PLACES),
        (-0.06).toFixed(DECIMAL_PLACES)
      )
    })
  })

  describe("natural log(x)", () => {
    it("should be close to given value", () => {
      assert.equal(
        backwardDiff(Math.log, 7).toFixed(DECIMAL_PLACES),
        (0.142857).toFixed(DECIMAL_PLACES)
      )
    })
  })

  describe("sqrt(sin(x))", () => {
    it("should be close to given value", () => {
      assert.equal(
        backwardDiff(func2, 1).toFixed(DECIMAL_PLACES),
        (0.294501324687).toFixed(DECIMAL_PLACES)
      )
    })
  })
})
