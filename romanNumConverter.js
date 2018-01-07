// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

// Here are some helpful links:
// Array.prototype.splice()
// Array.prototype.indexOf()
// Array.prototype.join()

//Roman Numerals:
// 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1000 = M

// input- any given number, no decimals
// output- answers should be uppercase, should be letters in Roman numeral form

// solution example:
// 1  array or an object that stores roman numerals
// 2  identify given number
// 3  match number to its roman counterpart
// 4  for loop the number for every romans numeral match
// 5 return Roman Numeral



function convertToRoman(num) {
    var placeValue = num.toString(10).split("");
    console.log(placeValue);
    return num;
}

console.log(convertToRoman(36));
// console.log(convertToRoman(2)); //should return "II".
// console.log(convertToRoman(3)); //should return "III".
// console.log(convertToRoman(4)); //should return "IV".
// console.log(convertToRoman(5)); //should return "V".
// console.log(convertToRoman(9)); //should return "IX".
// console.log(convertToRoman(12)); //should return "XII".
// console.log(convertToRoman(16)); //should return "XVI".
// console.log(convertToRoman(29)); //should return "XXIX".
// console.log(convertToRoman(44)); //should return "XLIV".
// console.log(convertToRoman(45)); //should return "XLV"
// console.log(convertToRoman(68)); //should return "LXVIII"
// console.log(convertToRoman(83)); //should return "LXXXIII"
// console.log(convertToRoman(97)); //should return "XCVII"
// console.log(convertToRoman(99)); //should return "XCIX"
// console.log(convertToRoman(500)); //should return "D"
// console.log(convertToRoman(501)); //should return "DI"
// console.log(convertToRoman(649)); //should return "DCXLIX"
// console.log(convertToRoman(798)); //should return "DCCXCVIII"
// console.log(convertToRoman(891)); //should return "DCCCXCI"
// console.log(convertToRoman(1000)); //should return "M"
// console.log(convertToRoman(1004)); //should return "MIV"
// console.log(convertToRoman(1006)); //should return "MVI"
// console.log(convertToRoman(1023)); //should return "MXXIII"
// console.log(convertToRoman(2014)); //should return "MMXIV"
// console.log(convertToRoman(3999)); //should return "MMMCMXCIX"
