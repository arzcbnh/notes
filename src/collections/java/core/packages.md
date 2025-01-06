---
title: Packages and modules
category: core
position: 80
---

-   The package statement must be the first statement in a file, followed by import statements.
-   Packages must follow the project structure, with package names matching the directory names.

```
Example project structure:

project-root/
└── me/
    └── arzcbnh/
        └── notes/
            ├── Notes.java
            ├── utils/
            └── processors/
                ├── Processor.java
                └── Markdown.java
```

```java
// Declare what package this file belongs to
package me.arzcbnh.notes;

// Import a specific object from another package
import me.arzcbnh.notes.processors.Processor;
import me.arzcbnh.notes.processors.Markdown;

// Import all objects from another package
import me.arzcbnh.utils.*;

// The fully qualified name of an object can be used instead of importing it
var reader = new java.io.FileReader("filename");
```

#### Modules

Modules are a Java SE 9 feature that resulted from [Project Jigsaw](https://openjdk.org/projects/jigsaw/). They allow, among other things, further encapsulation of the inner contents of a package. Since they're not widely adopted and I found them confusing, I decided to only study them if I ever need to.
