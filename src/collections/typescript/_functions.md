---
title: Functions
position: 30
---

#### Call signatures

```ts
type FunctionWithProperties = {
    (arg: number): boolean;
    description: string;
};

function isEven(n: number): boolean {
    return n % 2 === 0;
}
```
