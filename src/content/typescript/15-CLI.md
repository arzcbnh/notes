---
title: CLI and configuration
---

```sh
$ tsc # Run with the current directory tsconfig.json
$ tsc [files] # Compile specific files, no tsconfig.json needed
```

### Relevant options

| CLI argument      | `tsconfig.json` field | Default | Description                                                |
| ----------------- | --------------------- | ------- | ---------------------------------------------------------- |
| `--noEmitOnError` |                       | `false` | Prevents compiling to JavaScript in case an error is found |
| `--target`        |                       | `ES5`   | Sets the target ECMAScript version                         |
| `--strict`        |                       | `false` | Toggles on all strictness options                          |

### Strictness options

| Flag               | Description                                                                         |
| ------------------ | ----------------------------------------------------------------------------------- |
| `strict`           | Toggles all strictness options                                                      |
| `noImplicitAny`    | Prevent variables from being implicitly declared as `any`                           |
| `strictNullChecks` | Forbids `null` and `undefined` from being assignable to any variable and each other |
