---
title: Records
category: core
position: 60
---

-   Records automatically generate getters, a constructor, and implementations of `toString()`, `equals()`, and `hashCode()` (which are methods of `Object`).
-   All components of a records are private and final. Any attribute declared outside of the component list must be static.
-   Records implicitly extend `Record` and cannot be extended, but they can implement interfaces.

```java
// record <name>(<components>) { body }
record User(String name, int id) {}

User user = new User("Matt", 128);
assert user.name() == "Matt";
```

#### Custom constructors

-   Records automatically generate a canonical constructor, which is a constructor that takes all the components of the record as arguments and assigns them to their respective attributes.

```java
record User(String name, int id) {
  // In a compact canonical constructor, the block is run before the actual
  // constructor, and parameters can be reassigned as needed
  User {
    if (name.isEmpty()) {
      throw new IllegalArgumentException("Name cannot be empty");
    }

    name = name.trim();
  }

  // Other overloads are also accepted, but they must call the canonical
  // constructor at the beginning. Since fields are final, I don't see what
  // much else there is to be done with them
  User() {
    this("John Doe", -1);
  }
}
```
