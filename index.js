/* @module to-float32 */

'use strict'

module.exports = float32
module.exports.float32 =
module.exports.float = float32
module.exports.fract32 =
module.exports.fract = fract32

var narr = new Float32Array(1)

// return fractional part of float32 array
function fract32 (arr) {
	if (arr.length) {
		var fract = float32(arr)
		for (var i = 0, l = fract.length; i < l; i++) {
			fract[i] = arr[i] - fract[i]
		}
		return fract
	}

	// number
	return float32(arr - float32(arr))
}

// make sure data is float32 array
function float32 (arr) {
	if (arr.length) {
		if (arr instanceof Float32Array) return arr
		var float = new Float32Array(arr)
		float.set(arr)
		return float
	}

	// number
	narr[0] = arr
	return narr[0]
}
