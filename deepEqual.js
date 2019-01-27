// Walter Johnson
// Week 3 Activity: JS Objects

// deepEqual takes two values and returns true only if they are 
// the same value or are objects with the same properties, where the values of the 
// properties are equal when compared with a recursive call to deepEqual.

"use strict";

var deepEqual = function (value_1, value_2) {
    var equalFlag = false;

    if (typeof value_1 !== "object" || typeof value_2 !== "object") {
        if (value_1 === value_2) {
            equalFlag = true;
        }
    } else if (value_1 === null || value_2 === null) {
        if (value_1 === value_2) {
            equalFlag = true;
        }
    } else if (Object.keys(value_1).length === Object.keys(value_2).length) {
        equalFlag = true;
        for (const key_1 in value_1) {
            if (value_1.hasOwnProperty(key_1)) {
                const element_1 = value_1[key_1];
                for (const key_2 in value_2) {
                    if (value_2.hasOwnProperty(key_2)) {
                        const element_2 = value_2[key_2];
                        if (key_1 === key_2) {
                            equalFlag = deepEqual(element_1, element_2);
                        }
                    }
                    if (equalFlag === false) {
                        break;
                    }
                }
            }
        }
    }

    return equalFlag;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// ? true
console.log(deepEqual(obj, {here: 1, object: 2}));
// ? false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// ? true

let obj2 = null;

let obj3 = null;
