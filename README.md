## What's "whether-object-match" ?
You can compare two objects in JavaScript using this npm package.

## Example
```bash
var object_match = require("whether-object-match");
const a = {foo: "poteto",bar: "apple" }
const b = {bar: "apple",foo: "poteto" }
const c = {bar: "poteto",foo: "apple" }
console.log(object_match(a,b)) //true
console.log(object_match(b,c)) //false
```

## Building
```bash
$ npm install whether-object-match@0.03
```

