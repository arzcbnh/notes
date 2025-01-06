### Quirks

-   No variable shadowing.
-   Strings are _not_ arrays, so an index has to be accessed by calling `charAt()`.
-   For assigning constant methods and variables, use `final` instead of `const`. It can also be used with methods and classes to prevent overriding and inheritance.
-   `if` statements only accept expressions of boolean type; that is, 0, 1, and other values are _not_ valid as conditionals.
-   There's no unsigned integer type, but there's the ...
-   `short`, `int`, and `long` are always respectively 16-bit, 32-bit, and 64-bit, regardless of platform.
-   All primitives can be coerced into strings when doing string concatenation. Objects can be coerced too by defining the method `toString()` on them.
-   Switch-case expression may be an integer or a string.
-   For 8-bit integers, there is `byte`. `char` is a 16-bit integer _actually_ used for representing characters. This also means Unicode characters outside of the BPM can't be represented in a single char, because Java uses UTF-16.
