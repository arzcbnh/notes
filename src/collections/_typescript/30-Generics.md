---
title: Generics
position: 30
---

Generics provide a type for container types. For example, a variable of the type `Array` may contain anything - but using generics, we can infer what types are contained in it.

```ts
let random: Array = ["string", 10, ["nested"]];
let names: Array<string> = ["Matt", "John", "Anne"];

// Invalid
let names: Array<number> = [1, "two", 3];
```

### Declaring types

You can declare a type that uses generics with `interface`.

```ts
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}
```
