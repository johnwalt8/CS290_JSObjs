// Walter Johnson
// Week 3 Activity: JS Objects

// deepEqual takes two values and returns true only if they are
// the same value or are objects with the same properties, where the values of the
// properties are equal when compared with a recursive call to deepEqual.

"use strict";

var deepEqual = function (value_1, value_2) {
    var key_1, element_1, key_2, element_2, keyFlag, equalFlag = false;

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
        for (key_1 in value_1) {
            //keyFlag = false;
            if (value_1.hasOwnProperty(key_1)) {
                element_1 = value_1[key_1];
                for (key_2 in value_2) {
                    if (value_2.hasOwnProperty(key_2)) {
                        element_2 = value_2[key_2];
                        if (key_1 === key_2) {
                            //keyFlag = true;
                            equalFlag = deepEqual(element_1, element_2);
                        }
                        if (equalFlag === false) {// || keyFlag === false) {
                            break;
                        }
                    }
                }
                if (equalFlag === false) {// || keyFlag === false) {
                    break;
                }
            }
        }
    }

    return (equalFlag); // && keyFlag);
};

var obj = {here: {is: "an"}, object: 2};
var obj2 = {here: {is: "another"}, object: 2};
var obj3 = null;
console.log("obj = {here: {is: 'an'}, object: 2}");
console.log("obj2 = {here: {is: 'another'}, object: 2}");
console.log("obj3 = null");
console.log("deepEqual(obj, obj): " + deepEqual(obj, obj));
// ? true
console.log("deepEqual(obj, {here: 1, object: 2}): " + deepEqual(obj, {here: 1, object: 2}));
// ? false
console.log("deepEqual(obj, {here: {is: 'an'}, object: 2}): " + deepEqual(obj, {here: {is: "an"}, object: 2}));
// ? true
console.log("deepEqual(obj, {object: 2, here: 1}): " + deepEqual(obj, {object: 2, here: 1}));
// ? false
console.log("deepEqual(obj, {object: 2, here: {is: 'an'}}): " + deepEqual(obj, {object: 2, here: {is: "an"}}));
// ? true
console.log("deepEqual(obj, obj2): " + deepEqual(obj, obj2));
// ? false
console.log("deepEqual(obj2, obj2): " + deepEqual(obj2, obj2));
// ? true
console.log("deepEqual(obj2, obj3): " + deepEqual(obj2, obj3));
// ? false
console.log("deepEqual(obj3, obj3): " + deepEqual(obj3, obj3));
// ? true
console.log("deepEqual(obj3, null): " + deepEqual(obj3, null));
// ? true
console.log("deepEqual(obj, {hare: {in: 'an'}, object: 2}): " + deepEqual(obj, {hare: {in: "an"}, object: 2}));
// ? false
