import { assert } from "chai"
import { simpsonThreeEighth } from "../src/integration/simpsonThreeEighth"

const DECIMAL_PLACES = 4

const func1 = (arg0: number): number => {
  return 1 / (1 + arg0 * arg0)
}

const func2 = (arg0: number): number => {
  return Math.sqrt(Math.sin(arg0))
}

describe("SimpsonThreeEighth Rule", function () {
  describe("1 / (1 + x^2)", () => {
    it("should be close to given value", () => {
      assert.equal(
        simpsonThreeEighth(func1, 0, 1).toFixed(DECIMAL_PLACES),
        (0.78539816).toFixed(DECIMAL_PLACES)
      )
    })
  })

  describe("natural log(x)", () => {
    it("should be close to given value", () => {
      assert.equal(
        simpsonThreeEighth(Math.log, 4, 5.2).toFixed(DECIMAL_PLACES),
        (1.8278474).toFixed(DECIMAL_PLACES)
      )
    })
  })

  describe("sqrt(sin(x))", () => {
    it("should be close to given value", () => {
      assert.equal(
        simpsonThreeEighth(func2, 0, Math.PI / 2).toFixed(2),
        (1.1981402).toFixed(2)
      )
    })
  })
})
