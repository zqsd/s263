S263 geometry
=============

A wrapper to [s2-geometry](https://www.npmjs.com/package/s2-geometry) that encodes id in a 63 bits integer, but easier manipulation with 64 bits signed integers.


Installation
------------

`npm install --save git+https://github.com/zqsd/s263`

Usage
---
```
const S2 = require('s263');

S2.latLngToId(lat, lng, level)
S2.idToLatLng(id)
```
