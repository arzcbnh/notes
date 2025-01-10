---
title: Interfaces
position: 20
---

Objects can have their type declared inline.

```ts
const user: {
    name: string;
    age: number;
    nickname?: string;
} = {
    name: "Matt",
    age: 22,
};
```

By declaring a interface, a new type is formed which can be passed around and used in other assignments.

```ts
interface User {
    name: string;
    age: number;
    nickname?: string;
}

const user: User = {
    name: "Matt",
    age: 22,
};

const admin: User = {
    // ...
};
```

Unlike types, interfaces can be extended and merged.

```ts
interface Admin extends User {
    level: number;
}
```
