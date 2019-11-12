[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![npm version](https://badge.fury.io/js/object_matching.svg)](https://badge.fury.io/js/object_matching)

# object_matching

## 💬 About

You can easily compare two objects in JavaScript using this npm package.

## 💁‍♂️ example

```bash
var object_match = require("object_matching");
const a = {foo: "poteto",bar: "apple" }
const b = {bar: "apple",foo: "poteto" }
const c = {bar: "poteto",foo: "apple" }
console.log(object_match(a,b)) //true
console.log(object_match(b,c)) //false
```

## 🔰 install
```bash
$ npm install object_matching
```
