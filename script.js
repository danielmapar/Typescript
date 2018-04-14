// Cant do this in TS
// string
//let str = 'teste';
//str = 21;
// number
// let num = 20;
// num = '123'
// boolean
// let bool = true;
// bool = 1;
// assign types (type any)
var anyType;
anyType = 'teste';
anyType = 20;
// assign a type during declaration
var varWithType1;
var varWithType2;
var varWithType3 = true;
var varWithType4;
// array
var hobbies = ["Cooking", "Sports"];
// hobbies = [123] -> error, number is not assignable to type string
console.log(hobbies[0]);
console.log(typeof hobbies); // object
var arr = [1, 'teste', true];
// hobbies = 100; // error, we are still dealing with an array
// tuples
var address = ["Street", 99];
// enum (integers)
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101 (refers to the last item + 1)
})(Color || (Color = {}));
var myColor = Color.Green;
console.log("myColor: ", myColor);
