---
title: Class basics
category: core
position: 30
---

-   All classes inherit from the base class `Object`.
-   Besides attributes and methods, classes can also contain nested classes, enums, records, interfaces, and more.
-   If no constructor is defined, a default one with no parameters is provided.

```java
class Rectangle {
  // Attributes are declared as variables and hold values
  int width;
  int height;

  // Constructors initialize all instance members of a class
  Rectangle(int width, int height) {
    this.width = width;
    this.height = height;
  }

  // Methods follow the syntax <type> <name>() { body }
  int area() {
    return width * height;
  }
}

// Classes can inherit the members of another class
class Square extends Rectangle {
  Square(int side) {
    // The `super` keyword can be used to access the superclass constructor and overriden members
    super(side, side);
  }
}

// Constructors are invoked by using the 'new' keyword followed by the class name as a function
var square = new Square(3);
assert square.area() == 9;
```

#### Static and instance member

-   The `static` modifier is used to declare a static member of a class. Static members belong to the class type itself and are shared across all instances, while instance members belong to individual objects.
-   Constructors cannot be static.

```java
class Example {
  // Static attributes need a initial value;
  static int collective = 1;

  // Static methods can't access instance members for obvious reasons
  static int getCollective() {
    return collective;
  }

  int individual = 2;

  int getIndividual() {
    return individual;
  }
}

// Static members don't need an object instance to be accessed
assert Example.collective == 1;
assert Example.getCollective() == 1;

var example = new Example();
assert example.individual == 2;
assert example.getIndividual() == 2;
```

#### Access modifiers

-   The accessibility of a class and its members is given by the presence or absence of the access modifiers `public`, `private` and `protected`.
-   A top-level public class must be the only top-level public class declared in the file, and the filename must be equal to the class name with the suffix `.java`.

|                               | `public` | `protected` | None | `private` |
| ----------------------------- | -------- | ----------- | ---- | --------- |
| Same class                    | ✅       | ✅          | ✅   | ✅        |
| Same package subclass         | ✅       | ✅          | ✅   | ❌        |
| Same package other class      | ✅       | ✅          | ✅   | ❌        |
| Different package subclass    | ✅       | ✅          | ❌   | ❌        |
| Different package other class | ✅       | ❌          | ❌   | ❌        |

```java
// Filename: Example.java

public class Example {
  // Members can also have different accessors
  private long length;
  protected long getLength() {
    return length;
  }
}
```
