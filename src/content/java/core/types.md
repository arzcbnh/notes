---
title: Primitive types
category: core
position: 20
---

-   Integers: `byte`, `short`, `int`, `long` (8, 16, 32, and 64 bits respectively)
-   Floats: `float` and `double` (32 and 64 bits respectively)
-   `boolean` (values `true` and `false`)
-   `char` (a UTF-16 code unit)

#### Wrapper classes

-   Integers: `Byte`, `Short`, `Integer`, `Long`
-   Floats: `Float` and `Double`
-   `Boolean`
-   `Character`

```java
// The automatic conversion between primitives and wrappers is called autoboxing
// and auto-unboxing
Integer boxed = 1;
int unboxed = new Integer(2);
```

#### Literal conversion and casting

-   Unless a type suffix is provided, number literals are 'int' or 'double'.

```java
long a = 5000; // Automatic widening conversion of 'int' to 'long'
byte b = 180;  // Automatic narrowing conversion of 'int' to 'byte'

// Variables have to be cast
byte b = 50;
b = (byte) (b * 50);

// Without casting '1' to 'float', the expression would evaluate to 0 instead of
// 0.5 because both '1' and '2' are integers. Casting is not required if one of
// the operands is written as a double.
float f = (float) 1 / 2;
double g = 1.0 / 2;
```

#### Arrays

-   Arrays are not a class, but behave as direct subclasses of `Object`, and implement the `Cloneable` and `Serializable` interfaces.
-   The only member arrays provide that is not inherited or implemented is `length`.

```java
// Array sizes can be obtained from variables
int len = 10;
var arr = new int[10];
var arr = new int[len];

// With an array initializer, type inference is not possible
int[] numbers = { 7, 9, 6, 10, 9 };

// Arrays can be n-dimensional
var bitmap = new byte[3][2];

// Only the first dimension needs to be defined
var triangular = new int[3][];
triangular[0] = new int[3];
triangular[1] = new int[2];
triangular[2] = new int[1];
```
