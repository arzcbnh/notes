---
title: Narrowing and asserting types
position: 20
---

#### Assertions

-   Assertions coerce a value into a narrower or wider type.

```ts
// Non-null assertion (unsafe!)
const person = people.find(person => person.name === "John")!;

// Widening assertion
type Coord2D = { x: number; y: number };
type Coord3D = Coord2D & { z: number };

const coord3d = { x: 1, y: 2, z: 5 };
const coord2d = coord3d as Coord2D;

// Narrowing assertion (unsafe!)
const person = {} as Person;
person.name = "John";
person.age = 32;

// Useful narrowing assertion ('document.querySelector()' returns an HTMLElement by default)
const title = document.querySelector(".post_title") as HTMLHeadingElement;

// Illegal assertion (no type overlap)
const impossible = "string" as number;

// Any assertion can be achieved by first asserting as 'unknown'
const mistake = "string" as unknown as number;
```

##### `readonly` and `as const`

```ts
// Qualifying properties with the 'readonly' keyword prohibits assignments
type Person = { readonly name: string };
const person = { name: "John" } as Person;

// Asserting an object as const qualifies its properties as readonly
const STATUS_CODES = {
    OK: 200,
    ERROR: 400,
} as const;

// Illegal assignments
person.name = "Josh";
STATUS_CODES.OK = 400;
```

#### Type guards

-   Guards narrow types and unions at runtime.

```ts
function fn(arg: number | Person | Animal | null) {
    // Operations after this guard have 'arg' asserted as not null
    if (arg == null) {
        return;
    }

    if (typeof arg === "number") {
        // Operations here have 'arg' asserted as 'number'
    } else if (arg instanceof Person) {
        // Operations here have 'arg' asserted as 'Person'
    } else if (fly in arg) {
        // Operations here have 'arg' asserted as 'Animal' if it has a 'fly' property
    }
}
```

#### User-defined guards and assertions

-   It's safer to create custom guarding and assertion functions than asserting with the `as` keyword.

```ts
type Status = "OK" | "ERR";

// Guards must return booleans
function isStatusCode(str: string): str is Status {
    return str === "OK" || str === "ERR";
}

// Assertions must throw an error
function assertStatusCode(str: string): asserts str is Status {
    if (str === "OK" || str === "ERR") {
        return;
    }

    throw new Error(`String ${str} is not a status code`);
}
```
