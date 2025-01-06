---
title: Spring
category: misc
position: 30
---

[Official website](https://start.spring.io/)

#### Developer mode goal on Maven

```
./mvnw spring-boot:run
```

#### Annotations

-   `@Autowired`: ???

##### Layers

-   `@RestController`
-   `@Repository`
-   `@Service`

#### Routing

##### Mappings

All method mappings can have a path under the controller mapping.

-   `@RequestMapping("/user")`: controller for `example.com/user`
-   `@GetMapping("/all")`: GET method for `example.com/user/all`
-   `@PostMapping`: POST method for `example.com/user`
-   `@PutMapping`
-   `@DeleteMapping`

##### Path variables

Path variables must be enclosed in brackets.

```java
@RestController
@RequestMapping("/user")
public class UserController {
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
        // ...
    }

    // ...
}
```

#### Body

```java
ResponseEntity<Object> postUser(@RequestBody @Valid BodyDTO body) {
    // ...
}
```

#### Exception handling

```java
@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler({ SomeException.class })
    public ResponseEntity<Object> handleSomeException(SomeException e) {
        // ...
    }

    // ...
}
```

#### Properties

-   `spring.datasource.url`
-   `spring.datasource.username`
-   `spring.datasource.password`
