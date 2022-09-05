# Module: integration

## Table of contents

### Functions

- [simpsonOneThird](../wiki/integration#simpsononethird)
- [simpsonThreeEighth](../wiki/integration#simpsonthreeeighth)
- [trapezoidalRule](../wiki/integration#trapezoidalrule)

## Functions

### simpsonOneThird

▸ **simpsonOneThird**(`func`, `lowerLimit`, `upperLimit`): `number`

**`Example`**

```ts
simpsonOneThird(Math.log, 4, 5.2)

simpsonOneThird(func1, 0, 1)

const func1 = (arg0: number): number => {
 return 1 / (1 + arg0 * arg0)
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | (`arg0`: `number`) => `number` | Function to integrate |
| `lowerLimit` | `number` | Lower limit to integrate within. |
| `upperLimit` | `number` | Upper limit to integrate within. |

#### Returns

`number`

integration of given function within given limits.

#### Defined in

[integration/simpsonOneThird.ts:19](https://github.com/RohitSingh107/calculus-algorithms/blob/ffec256/src/integration/simpsonOneThird.ts#L19)

___

### simpsonThreeEighth

▸ **simpsonThreeEighth**(`func`, `lowerLimit`, `upperLimit`): `number`

**`Example`**

```ts
simpsonThreeEighth(Math.log, 4, 5.2)

simpsonThreeEighth(func1, 0, 1)

const func1 = (arg0: number): number => {
 return 1 / (1 + arg0 * arg0)
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | (`arg0`: `number`) => `number` | Function to integrate |
| `lowerLimit` | `number` | Lower limit to integrate within. |
| `upperLimit` | `number` | Upper limit to integrate within. |

#### Returns

`number`

integration of given function within given limits.

#### Defined in

[integration/simpsonThreeEighth.ts:19](https://github.com/RohitSingh107/calculus-algorithms/blob/ffec256/src/integration/simpsonThreeEighth.ts#L19)

___

### trapezoidalRule

▸ **trapezoidalRule**(`func`, `lowerLimit`, `upperLimit`): `number`

**`Example`**

```ts
trapezoidalRule(Math.log, 4, 5.2)

trapezoidalRule(func1, 0, 1)

const func1 = (arg0: number): number => {
 return 1 / (1 + arg0 * arg0)
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | (`arg0`: `number`) => `number` | Function to integrate |
| `lowerLimit` | `number` | Lower limit to integrate within. |
| `upperLimit` | `number` | Upper limit to integrate within. |

#### Returns

`number`

integration of given function within given limits.

#### Defined in

[integration/trapezoidal.ts:19](https://github.com/RohitSingh107/calculus-algorithms/blob/ffec256/src/integration/trapezoidal.ts#L19)
