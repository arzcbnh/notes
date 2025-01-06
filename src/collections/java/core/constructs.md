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
int statusCode = request();
switch (statusCode) {
    case 200:
        return Status.SUCCESS;
        break;
    case 400:
    case 404:
        return Status.ERROR;
        break;
    default:
        throw new Error("Unknown status code: " + statusCode);
}

// Switch expressions evaluate to a value, have a different label syntax, and
// don't use break statements
Object response = request();
return switch (response) {
    case 200 -> Status.SUCESS;
    case 400, 404 -> Status.ERROR;

    // Pattern matching
    case Status status -> status;

    // Guard clause
    case String code when code.equals("200") -> Status.SUCCESS;

    // 'yield' exits the switch with a value
    case String code -> {
        if (code.equals("400") || code.equals("404")) yield Status.ERROR;
        else yield Status.UNKNOWN;
    }

    // Only null can be combined with default
    case null, default -> throw new Error("Unsupported response type: " + response);
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
