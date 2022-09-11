# Calculus Algorithms

This library includes various algorithms for calculus.

Currently it's in heavy development and only few are implemented.

Just wait many more algorithms are coming soon!

If you want, you can contribute too!

If you like this library don't forget to start the repository!

[calculus-algorithms](README.md) / Modules

# calculus-algorithms

## Table of contents

### Modules

- [differentiation](/docs/modules/differentiation.md)

  - [backwardDiff](differentiation.md#backwarddiff)
  - [centralDiff](differentiation.md#centraldiff)
  - [differentiate](differentiation.md#differentiate)
  - [forwardDiff](differentiation.md#forwarddiff)

- [integration](/docs/modules/integration.md)

[calculus-algorithms](../README.md) / [Modules](../modules.md) / differentiation

## Module: differentiation

## Table of contents

### Functions

## Functions

### backwardDiff

▸ **backwardDiff**(`fx`, `x`, `h?`): `number`

**`Remarks`**

This is a numerical method.

**`Example`**

```ts
backwardDiff(Math.log, 7)

backwardDiff(func1, 3, 0.0001)

const func1 = (arg0: number): number => {
  return 1 / (1 + arg0 * arg0)
}
```

#### Parameters

| Name | Type                           | Default value | Description                            |
| :--- | :----------------------------- | :------------ | :------------------------------------- |
| `fx` | (`arg0`: `number`) => `number` | `undefined`   | Function to differentiate.             |
| `x`  | `number`                       | `undefined`   | Differentiate at this given value.     |
| `h`  | `number`                       | `0.0001`      | Optional parameter - step size to use. |

#### Returns

`number`

differentiation of given function at given value.

#### Defined in

[differentiation/backwardDividedDifference.ts:22](https://github.com/RohitSingh107/calculus-algorithms/blob/40bb5e3/src/differentiation/backwardDividedDifference.ts#L22)

---

### centralDiff

▸ **centralDiff**(`fx`, `x`, `h?`): `number`

**`Remarks`**

This is a numerical method.

**`Example`**

```ts
centralDiff(Math.log, 7)

centralDiff(func1, 3, 0.0001)

const func1 = (arg0: number): number => {
  return 1 / (1 + arg0 * arg0)
}
```

#### Parameters

| Name | Type                           | Default value | Description                            |
| :--- | :----------------------------- | :------------ | :------------------------------------- |
| `fx` | (`arg0`: `number`) => `number` | `undefined`   | Function to differentiate.             |
| `x`  | `number`                       | `undefined`   | Differentiate at this given value.     |
| `h`  | `number`                       | `0.0002`      | Optional parameter - step size to use. |

#### Returns

`number`

differentiation of given function at given value.

#### Defined in

[differentiation/centralDividedDifference.ts:22](https://github.com/RohitSingh107/calculus-algorithms/blob/40bb5e3/src/differentiation/centralDividedDifference.ts#L22)

---

### differentiate

▸ **differentiate**(`expression`): `string`

**`Remarks`**

This is a not a numerical method.

**`Example`**

```ts
diff("4x^3 - 3x^1 + 2x^2")
```

#### Parameters

| Name         | Type     | Description                  |
| :----------- | :------- | :--------------------------- |
| `expression` | `string` | Expression to differentiate. |

#### Returns

`string`

differentiation of given expression.

#### Defined in

[differentiation/differentiate.ts:48](https://github.com/RohitSingh107/calculus-algorithms/blob/40bb5e3/src/differentiation/differentiate.ts#L48)

---

### forwardDiff

▸ **forwardDiff**(`fx`, `x`, `h?`): `number`

**`Remarks`**

This is a numerical method.

**`Example`**

```ts
forwardDiff(Math.log, 7)

forwardDiff(func1, 3, 0.0001)

const func1 = (arg0: number): number => {
  return 1 / (1 + arg0 * arg0)
}
```

#### Parameters

| Name | Type                           | Default value | Description                            |
| :--- | :----------------------------- | :------------ | :------------------------------------- |
| `fx` | (`arg0`: `number`) => `number` | `undefined`   | Function to differentiate.             |
| `x`  | `number`                       | `undefined`   | Differentiate at this given value.     |
| `h`  | `number`                       | `0.0001`      | Optional parameter - step size to use. |

#### Returns

`number`

differentiation of given function at given value.

#### Defined in

[differentiation/forwardDividedDifference.ts:22](https://github.com/RohitSingh107/calculus-algorithms/blob/40bb5e3/src/differentiation/forwardDividedDifference.ts#L22)
