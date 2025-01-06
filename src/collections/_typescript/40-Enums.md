---
title: Enums
position: 40
---

Enums can be declared with the `enum` keyword. Each entry in a enum is automatically indexed starting from 0, like in C. However, you can also assign a string literal to each entry.

<DynamicColumns>
```ts
enum UserResponse {
    No,  // 0
    Yes, // 1
}

console.log(UserResponse.Yes) // -> 1

````

```ts
enum Direction {
    UP = "up",
    RIGHT = "right",
    DOWN = "down",
    LEFT = "left",
}

let goal: Direction = Direction.RIGHT
console.log(goal) // -> right
````

</DynamicColumns>
