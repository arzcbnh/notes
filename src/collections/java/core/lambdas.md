---
title: Lambdas
category: core
position: 100
---

-   Lambdas can't have their type inferred.

```java
// arg -> expression
// (arg1, arg2, ...) -> { body }

IntBinaryOperator sum = (a, b) -> a + b;
assert sum.applyAsInt(3, 4) == 7;

List<Integer> ages = persons.map(p -> {
    return p.age;
})
```

#### Functional interfaces

More built-in interfaces at [java.util.function](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/package-summary.html).

```java
@FunctionalInterface
interface IndexConsumer {
    void accept(int index);
}

void forEachPerson(IndexConsumer consumer) {
    IntStream.range(0, persons.size()).forEach(index -> consumer.accept(index));
}
```
