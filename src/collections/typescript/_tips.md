---
title: Tips and tricks
category: core
position: 1
---

### `as const`

Asserting an object as const prevents its fields from being changed.

```ts
const req = { url: "http://example.com", method: "GET" } as const;
req.method = "POST"; // Error
```
