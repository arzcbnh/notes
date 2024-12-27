-   Type parameters and generic arrays can't be instantiated.
-   Type parameters can't be used for static members.
-   A generic class can't extend `Throwable`.

```java
// Declaring a generic class
class Gen<T> {
    T value;

    Gen(T v) { /* ... */ };
}

// Declaring a generic class with more than one parameters
class Gen<T, V> { /* ... */ }

// Upper-bounding a parameter
class Gen<T extends Number> { /* ... */ }
class Gen<T extends ControllerInterface> { /* ... */ }
class Gen<T extends Number & ControllerInterface> { /* ... */ }

// Using wildcards
class Gen<T extends Number> {
    void methodWith(Gen<?> obj) { /* ... */ }
    void methodWith(Gen<? extends Float> num) { /* ... */ }
}

// Generic method
<T extends V> boolean hasSomething() { /* ... */ }
<T extends V> T returnThis() { return (T) this; }
```
