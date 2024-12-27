```java
// Marker annotations (no members)
@interface MarkerAnnotation {}
@MarkerAnnotation()
@MarkerAnnotation

// Single-member annotations
@interface SingleMemberAnnotation {
    int value(); // The member must be named 'value'
}
@SingleMemberAnnotation(value = 100)
@SingleMemberAnnotation(100)
```
