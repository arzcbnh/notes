---
title: Core constructs
category: core
position: 10
---

#### Variable declaration

```java
// <type> <varname>
int number;
String text;

// Type inference
var obj = new Object();

// Constant variable with 'final' keyword
final String expected = "OK";
```

#### Flow control

```java
// Expression inside parentheses MUST evaluate to a boolean
if (num == 1) {
    // ...
} else if (num == 2) {
    // ...
} else {
    // ...
}

// Accepts number primitives and wrappers, strings, and enumerated types
Status st = someRequest();
switch (st) {
    case Ok:
    case Success:
        send();
        break;
    case Error:
        retry();
        break;
    default:
        throw new Error("Unsupported status");
}

// Switch expressions evaluate to a value, have a different label syntax, and
// don't use break statements
Status st = someRequest();
Status result = switch (val) {
    case Ok, Success -> send();
    case Error -> retry();
    default -> throw new Error("Unsupported status");
}
```

#### Loops

```java
while (expr) {
    // ...
}

do {
    // ...
} while (expr)

for (int i = 0; i < arr.length; i++) {
    // ...
}

// The for-each loop, also known as the enhanced for loop, accepts arrays and
// objects that implement the Iterable interface
for (var element : arr) {
    // ...
}
```
