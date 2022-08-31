import { assert } from "chai"
import { diff } from "../src/differentiation"

describe("Diffrentition", () => {
  describe("5x^4 + 6x^2 + 5x^2", () => {
    it("polynomial test", () => {
      assert.equal(diff("5x^4 + 6x^2 + 5x^2"), "20x^3 + 12x^1 + 10x^1")
    })
  })

  describe("4x^3 - 3x^1 + 2x^2", () => {
    it("polynomial test", () => {
      assert.equal(diff("4x^3 - 3x^1 + 2x^2"), "12x^2 - 3x^0 + 4x^1")
    })
  })
})
