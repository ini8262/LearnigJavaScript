'use strict';

const array = [1, 2];
array[5] = "aaa";
for(let i of array) {
	console.log(`hi for_of: ${i}`);
}

for(let i in array) {
	console.log(`hi for_in: ${array[i]}`);
	
}