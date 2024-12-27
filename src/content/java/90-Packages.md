### Packages

-   More than one file can include the same package statement, because it simply specifies to which package the classes defined in a file belong to.
-   Packages are searched for in the current working directory and the CLASSPATH environment variable.
-   The `package` statement must be the first statement in a file. `import` statements must follow it (if it exists), and precede any class definition.

```java
package mypkg;

// Importing a class or package
import Math.Calculator;

// Importing every class or package
import Utils.QuadMap.*;
```

#### Multileveled packages

> [!NOTE]
> Needs more in-depth study.

Since `pkg2` is a subpackage of `pkg1`, you have to refer to it as such even in subcontexts.

```java
Demo.java
pkg1
├── Pkg1.java
└── pkg2
    └── Pkg2.java

// In Pkg1.java
package pkg1;

public class Pkg1 {
    public Pkg1() {
        // Notice 'pkg1' referring to itself
        new pkg1.pkg2.Pkg2();
    }
}

// In Pkg2.java
package pkg1.pkg2;

public class Pkg2 { /* ... */ }
```
