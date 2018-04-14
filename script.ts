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
let anyType;
anyType = 'teste';
anyType = 20;

// assign a type during declaration
let varWithType1: string;
let varWithType2: number;
let varWithType3: boolean = true;
let varWithType4: any;

// array
let hobbies = ["Cooking", "Sports"]
// hobbies = [123] -> error, number is not assignable to type string
console.log(hobbies[0]);
console.log(typeof hobbies); // object

let arr: any[] = [1, 'teste', true];
// hobbies = 100; // error, we are still dealing with an array

// tuples
let address: [string, number] = ["Street", 99]

// enum (integers)
enum Color {
  Gray, // 0
  Green = 100, // 100
  Blue // 101 (refers to the last item + 1)
}

let myColor = Color.Green;
console.log("myColor: ", myColor)
