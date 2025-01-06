---
title: Exceptions
category: core
position: 70
---

-   All exception types are subclasses of `Throwable`.

```java
throw new ExceptionType();

// Subclasses of 'Exception' must be handled explicitly
void exampleMethod() throws ExceptionType {
    throw new ExceptionType();
}

// Subclasses of 'RuntimeException' and 'Error' don't need to be handled
void exampleMethod() {
    throw new RuntimeExceptionType();
}

// Standard exceptions can have an error message and/or be chained
throw new Exception("message");
throw new Exception(causeException);
throw new Exception("message", causeException);
```

#### Try-catch statements

-   A try statement must be followed by either a catch or a final statement. A try-with-resources statement doesn't need either because it already has an implicit final statement.

```java
try {
    // ...
} catch (ExceptionType1 e) {
    // Catch statements can be chained to catch different exceptions
} catch (ExceptionType2 | ExceptionType3 e) {
    // Catch parameter types can be unionised
} finally {
    // Optional final statement
}

// The try-with-resources statement accepts objects that implement the AutoCloseable
// interface and automatically closes them
try (var file = new BufferedReader(new FileReader("file.txt"))) {
    // ...
}
```
