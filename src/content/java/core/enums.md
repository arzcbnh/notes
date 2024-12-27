---
title: Enums
category: core
position: 50
---

-   Enums are class types that implicitly extend `Enum<T>`.
-   Enums cannot be instantiated or extended.
-   Enums can contain instance and static members, constructors, and implement interfaces.

```java
enum Fruit {
  Apple, Orange, Watermelon, Peach
}

// The constants of an enum are accessed as members
Fruit dessert = Fruit.Peach;

// Constants can have their names converted to strings
assert dessert.toString().equals("Peach");
```

#### Constructors

```java
enum Product {
  TV(1000), Computer(2000), WashingMachine(300), Console(600);

  int price;

  Product(int price) {
    this.price = price;
  }
}

assert Product.Computer.price == 2000;
```

#### Implementing interfaces

```java
interface Printable {
  void print();
}

enum Color implements Printable {
  Red, Green, Blue;

  void print() {
    System.out.println("Color: " + this);
  }
}

Color.Red.print();
  // -> Color: Red
```

#### `value()` and `valueOf()`

```java
// 'values()' returns an array of all constants
Fruit[] allFruit = Fruit.values()
for (var fruit : allFruit) { /* ... */ }

// 'valueOf()' returns a constant if it matches the passed string
Fruit apple = Fruit.valueOf("Apple");    // -> Fruit.Apple
Fruit banana = Fruit.valueOf("Banana");  // -> EnumConstantNotPresentException
```

#### Switch statements

```java
// Constant names in switches cannot be preceded by their enum type name.
switch (dessert) {
  case Watermelon:
  case Peach:
    gorgeOn();
    break;
  default:
    eatCalmly();
}
```
