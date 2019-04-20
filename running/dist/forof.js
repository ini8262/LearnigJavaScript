'use strict';

var array = [1, 2];
array[5] = "aaa";

for (var _i = 0, _array = array; _i < _array.length; _i++) {
  var _i2 = _array[_i];
  console.log("hi for_of: ".concat(_i2));
}

for (var i in array) {
  console.log("hi for_in: ".concat(array[i]));
}