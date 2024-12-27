---
title: Narrowing
position: 50
---

When dealing with function parameters that are of a union type, one must consider every possible type when writing the function. This process is called _narrowing_.

-   `typeof`

```ts
function fn(arg: number | string) {
    if (typeof arg === "number") {
        // Operations here have 'arg' asserted as 'number'
    } else {
        // Operations here have 'arg' asserted as 'string'
    }
}
```

-   `in` operator

```ts

```
