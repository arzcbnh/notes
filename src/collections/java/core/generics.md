---
title: Generics
category: core
position: 90
---

-   Classes, interfaces, records, and enums can have generic type parameters.
-   Type parameters and generic arrays can't be instantiated, only referred to.
-   A generic class can't extend `Throwable`.

```java
// Declaring a class with a type parameter
class GenericExample<T> {
    T value;

    GenericExample(T value) {
        this.value = value;
    };
}

// Declaring a class with more than one type parameter
class Gen<T, V> { /* ... */ }

// Instantiating a generic class
GenericExample<Integer> intInstance = new GenericExample<>(1);
var strInstance = new GenericExample<String>("value");
```

#### Upper-bounding

```java
// T must be a subclass of ExampleClass
class Gen<T extends ExampleClass> { /* ... */ }

// T must implement ExampleInterface
class Gen<T extends ExampleInterface> { /* ... */ }

// T must be a subclass of ExampleClass and implement both Interface1 and Interface2
class Gen<T extends ExampleClass & Interface1 & Interface2> { /* ... */ }
```

#### Wildcard arguments

-   Wildcard arguments can be lower-bounded.

```java
// The parameterized type is irrelevant and not used
long getListSize(List<?> list) {
    return list.size();
}

List<?> list = List.of(/* any value, since it's irrelevant */);

// Upper-bounding
Number upperBoundExample(List<? extends Number> list) {
    // Every item of the list is an instance of Number or of a subclass of Number,
    // so supplied values can be treated as Numbers or as superclasses of Number
    Number num = list.getLast();
    Object obj = list.getLast();

    // Items may be more specific than Number, so values can't be consumed:
    // what if the list expects Doubles instead of Integers?
    // list.add(Integer.valueOf(1));

}

// Lower-bounding
void lowerBoundExample(List<? super Number> list) {
    // Every item of the list is an instance of Number or of a superclass of Number,
    // so instances of Number or of subclasses of Number can be consumed
    list.add(Integer.valueOf(1));
    list.add(Float.valueOf(2.5));

    // Items may be less specific than Number, so supplied values can't be treated as Number:
    // what if the list has Objects that have no members of Number?
    // Number value = list.getLast();
}

// So confusing!!!
```

#### Generic methods

```java
class Example<T> {
    private T value;

    // An instance method can use the class' type parameter or its own type parameter
    boolean isValue(T value) {
        return this.value == value;
    }

    <E> boolean isContainedBy(E container) {
        return container.has(value);
    }

    // A static method can only use its own type parameter
    static <E> String convertAndAppend(E obj) {
        return "Converted by 'Example' to: " + obj.toString();
    }
}
```
