---
title: Class advanceds
category: core
position: 40
---

#### Overloading and overriding

-   Redeclaring a superclass method signature will cause the method to be overriden. Any call to it under the context of the subclass will invoke the new definition.
-   Declaring a method with the same name but different parameters will cause the method to be overloaded. The correct method will be invoked depending on the given arguments.
-   Constructors can be overloaded, but not overriden (since they're not inherited).

```java
class SuperExample {
  // The method 'giveBack' has two overloads
  int giveBack(int n) {
    return n;
  }

  String giveBack(String str) {
    return str;
  }
}

class SubExample extends SuperExample {
  // The method 'giveBack' has one of its overloads overridden
  String giveBack(String str) {
    return "sike!";
  }
}
```

#### Abstract classes

-   Abstract classes can contain everything a normal class, plus abstract methods. Constructors can't be abstract, since they're not inherited.
-   Subclasses of an abstract class must either be abstract too or implement all abstract methods.

```java
abstract class Shape {
  abstract double area();
}

class Square extends Shape {
  double side;

  double area() {
    return side * side;
  }
}

// Abstract classes can't be instantiated, but can be referenced as a type
Shape shape = new Square();
```

#### Interfaces

-   Interfaces cannot contain instance attributes and methods. Declared attributes are implicitly public, static, and final. Declared methods are implicitly public.
-   Implementing classes must implement all interface methods. Static methods are not inherited.

```java
interface Stinky {
  void stink();
}

interface Alive {
  void breathe();
}

// Interfaces can extend multiple other interfaces
interface Animal extends Alive, OtherExampleInterface {
  void walk();
}

// Classes can implement multiple interfaces
class Dog implements Animal, Stinky {
  void breathe() { /* ... */ }
  void stink() { /* ... */ }
  void walk() { /* ... */ }
}

// Interfaces can't be instantiated, but can be referenced as a type.
Animal creature = new Dog();
```

#### Initiliazer blocks

```java
class Example {
  static int shared;
  int unique;

  // Static initializers run when the class is loaded
  static {
    shared = 1;
  }

  // Instance initializers run when an object is instantiated, before the constructor
  {
    unique = 2;
  }
}
```
