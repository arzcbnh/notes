---
title: I/O
category: stdlib
position: 20
---

-   The `java.io` package provides a middle-level API for interacting with files.
-   The try-with-resources statement is especially useful for streams, since they implement the `AutoCloseable` interface.

#### `InputStream` and `OutputStream`

-   Abstract base classes for byte streams.
-   Bytes can be read from and written to files through `FileInputStream` and `FileOutputStream`.

#### `Reader` and `Writer`

-   Abstract base classes for character streams.
-   Characters can be read from and written to files through `FileReader` and `FileWriter`.

#### `System` streams

-   The `System` class has the standard streams:
    -   `InputStream in`
    -   `PrintStream out`
    -   `PrintStream err`
-   The standard streams are not instances of `Reader` and `Writer` for historical reasons, but can be wrapped with them for extended character functionality.

```java
System.out.println("Standard output");
System.err.println("Standard error");

// Because 'in' is an InputStream, it can only read bytes
// In a different solution, 'array' could also be a List type
var array = new ByteArrayOutputStream();
int b = System.in.read();

while (b != '\n' && b != -1) {
    array.write(b);
    b = System.in.read();
}

System.out.println(array.toString(StandardCharsets.UTF_8));

// Wrapping a Reader around System.in
var reader = new BufferedReader(new InputStreamReader(System.in));
String line = reader.readLine();
```

#### New I/O

-   The `java.nio` package provides a higher-level, non-blocking API for interacting with files.

```java
var path = java.nio.Paths.get("file.txt");
var contents = java.nio.Files.readString(path);
```
