---
title: Types
position: 10
---

Types can be assigned to variables and functions with the type annotation syntax, although that's not always necessary because TypeScript can infer types.

The available primitive types are `number`, `string`, `boolean`, `bigint`, and `symbol`. There's also the special types: `any`, `unknown`, `void`. While the former disables any type checking of its assigned variable, the latter. A type can also be a literal value.

```ts
let name: string = "Anne";
let age = 25; // Implicitly inferred as type 'number'
const city = "São Paulo"; // Implicity inferred as type "São Paulo";

function fn(arg: string): boolean {
    /* ... */
}
//                 │         └ return type
//                 └ parameter type

function inf() {
    return true;
} // Implicitly inferred return value of type 'boolean'
```

Objects can also have their types annotated. They can declare optional properties by adding `?` after the property name. Types are checked by their structure, therefore objects with different types that follow the same structure are considered equivalent in that sense. Notice how the variable `anne` and the function argument `user` have overlapping types.

```ts
function operateOnUser(user: { name: string; age?: number }) {
    /* ... */
}
let anne = { name: "Anne" }; // Inferred object type of { name: string }
operateOnUser(anne); // Valid
```

Types can be aliased with the `type` keyword, followed by its name and composing types - just like a variable definition.

```ts
type Name = string;
type SearchEngine = "google";
type User = {
    name: string;
    age?: number;
};

let name: Name = "Matt";
let engine: SearchEngine = "bing"; // Error
```

### Arrays and tuples

Arrays and tuples have a special syntax for their declaration. An array can be declared by following the type it contains with two brackets, while tuples can be declared with the types it accepts properly positioned inside brackets.

```ts
let countries: string[] = ["Brazil", "Argentina", "Uruguay"];
let user: [string, number] = ["Matt", 22];
```

### Unions

A union is declared with a pipe `|` and indicates a type may be one of many other types.

```ts
type Response = "Yes" | "No" | "Error";
type Result = (string | number)[];
```

### Assertions

A variable can be coerced to another type that has an overlapping structure with the `as` keyword, or with the bracket syntax. There's also the non-null assertion operator `!`.

```ts
// 'as' keyword
const div = document.querySelector("div") as HTMLElement;

// Bracket syntax, doesn't work on .tsx
const div = <HTMLElement>document.querySelector("div");

// Invalid assertion
const value = "text" as number;

// Array.prototype.find returns undefined in case no matching value is found, but that can be ignored with the non-null assertion operator
const str = strarr.find(/* ... */)!;
```

A structured value can have its fields converted to literals with an assertion.

The non-null assertion operator removes `null` and `undefined` from a type without any explicit type checking.

```ts
// Will throw a TypeError during runtime if str is null
let lowercase = str!.toLowerCase();
```
