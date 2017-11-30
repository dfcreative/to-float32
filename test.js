'use strict'

let {float32, fract32} = require('./')
let a = require('assert')

let data = [0, 0.1, 0.2, 0.5, 1, 1.5]

a.deepEqual(float32(data), new Float32Array(data))
a.deepEqual(fract32(data), [ 0, -1.4901161415892261e-9, -2.9802322831784522e-9, 0, 0, 0 ])