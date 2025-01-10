---
title: Core constructs
position: 10
---

#### Type expressions and aliases

-   The available primitive types are `number`, `string`, `boolean`, `bigint`, and `symbol`.
-   There's also the special types: `any`, `unknown`, `void`, and `never`.

```ts
// Literals
type ArbitraryNumber = 10;
type ArbitraryString = "Words and letters";

// Arrays
type Playlist = string[];
type Map = Node[][];

// Tuples
type Coordinate = [number, number];
type Profile = [string, number];

// Objects
// 'age' is an optional property (may be undefined)
type Person = { name: string; age?: number };

// Functions
// The type after the fat arrow is the return type
type ArraySummator = (arr: number[]) => number;
```

#### Type annotations

<!-- prettier-ignore -->
```ts
// Variables
const city: string = "São Paulo";
let name: string;
let data: Person;

// Functions
function fillWithValue(arr: number[], val: number): number[] {
    // ...
}

// Lambdas
const summator: (a: number, b: number) => number = (a, b) => a + b;
const multiplier = (a: number, b: number): number => a * b;

// Inferrence
let name = "John";                           // Inferred as string
const city = "São Paulo";                    // Inferred as literal 'São Paulo'
people.map(person => person.name);           // Inferred as (p: Person) => string based on expected type
function isEven(n: number) { return n % 2; } // Inferred as (n: number) => boolean based on return type
```

#### Unions and intersections

```ts
// Union types accept any value that satisfies one of the unionized types
type Direction = "north" | "south" | "west" | "east";
type Status = number | string;

const dir: Direction = "south";
const status: Status = 200;

// Object types can be intersected to create richer types
type Document = Person & { ssn: string };
const doc: Document = { name: "John", ssn: "1234567890" };
```
