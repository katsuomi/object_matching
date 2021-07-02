[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![npm version](https://badge.fury.io/js/object_matching.svg)](https://badge.fury.io/js/object_matching)
[![Build Status](https://travis-ci.org/katsuomi/object_matching.svg?branch=master)](https://travis-ci.org/katsuomi/object_matching)

# object_matching

## 💬 About

Using this npm package, You can compare two objects.

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
