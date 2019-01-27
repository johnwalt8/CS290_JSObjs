// Walter Johnson
// Week 3 Activity: JS Objects

// deepEqual takes two values and returns true only if they are 
// the same value or are objects with the same properties, where the values of the 
// properties are equal when compared with a recursive call to deepEqual.

var deepEqual = function (value1, value2) {
    
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// ? true
console.log(deepEqual(obj, {here: 1, object: 2}));
// ? false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// ? true