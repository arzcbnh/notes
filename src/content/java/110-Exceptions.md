### Exceptions

-   All exception types are subclasses of the built-in class `Throwable`. Custom exception types are extended from its subclass `Exception`.
-   `Exception` needs to be declared and handled, while `RuntimeException` does not.
-   try-with-resources doesn't need catch or finally

```java
try {
    // ...
} catch (ExceptionType1 e) {
    // ...
} catch (ExceptionType2 | ExceptionType3 e) {
    // Multi-catch parameters are implicitly final
} finally {
    // ...
}

throw new Exception();

// If a method may throw an exception it does not handle, this behavior must be
// specified with a 'throws' clause.
void method() throws ExceptionType1, ExceptionType2 { /* ... */ }
```
