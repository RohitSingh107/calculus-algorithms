import { assert } from "chai"
import { simpsonOneThird } from "../src/integration/simpsonOneThird"

const DECIMAL_PLACES = 5

const func1 = (arg0: number): number => {
  return 1 / (1 + arg0 * arg0)
}

describe("SimpsonOneThird Rule", function () {
  describe("First test", () => {
    it("should be close to given value", () => {
      assert.equal(
        simpsonOneThird(func1, 0, 1).toFixed(DECIMAL_PLACES),
        (0.785396).toFixed(DECIMAL_PLACES)
      )
    })
  })

  describe("Second test", () => {
    it("should be close to given value", () => {
      assert.equal(
        simpsonOneThird(Math.log, 4, 5.2).toFixed(DECIMAL_PLACES),
        (1.827847).toFixed(DECIMAL_PLACES)
      )
    })
  })
})
