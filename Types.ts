// Cant do this in TS

// type inference

// string

// wont work
// let str = 'teste';
// str = 21;

//works
// let str : string = "Pedro";
// str = "Teste";

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

let car: any = "BMW";
console.log(car)
car = { brand: "BMW", series: 3};
console.log(car);

let myName = "Daniel";
function returnMyName() : string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello() : void {
  console.log("Hello!");
}
let ret = sayHello();
console.log("ret: ", ret)

// aurgment types
function multiply(value1: number, value2: number) : number {
  return value1 * value2;
}
console.log(multiply(2, 4))

// function types
let myMultiply : (a: number, b: number) => number;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2))

// objects (type inference to an object with a string prop and an int prop)
let userData = {
  name: "Max",
  age: 27
}
// userData = {}; fails
userData = {
  name: "teste",
  age: 24
};

let strongObject: { name: string, age: number };
strongObject = {
  name: "Daniel",
  age: 25
};

let complexObject : {
  data: number[],
  output: (all: boolean) => number[]
} = {
  data: [10, 20, 30],
  output: function(all: boolean) : number[] {
    return this.data;
  }
}

// Defining types
type Complex = {
  data: number[],
  output: (all: boolean) => number[]
};

let complexObject2 : Complex = {
  data: [10, 20, 30],
  output: function(all: boolean) : number[] {
    return this.data;
  }
}


// Uniun types (accepts both strings and numbers)
let myRealRealAge : number | string = 27;
myRealRealAge = '27';

// check types
let finalValue = "A string";
if (typeof finalValue == "string") {
  console.log("Final value is a string: ", finalValue)
}

// never type (TS 2.0)
function neverReturns(): never {
  // This function never finishes, it just throws an error
  // It NEVER returns anything
  throw new Error('An error!');
}

// Nullable Types (can be null)
let canBeNull: number | null = 12;
canBeNull = null;

let cannotBeNull = 12;
// cannotBeNull = null; -> it will fail, check tsconfig for "strictNullChecks"
