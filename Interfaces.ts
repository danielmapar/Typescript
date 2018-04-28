interface NamePerson {
  name: string;
  age?: number; // optional
  [propName: string]: any; // setup dynamic properties
  greet(lastName: string) : void
}

function greet(person: {name: string}) {
  console.log('Hello ', person.name);
}

function greet2(person: NamePerson) {
  console.log('Hello ', person.name);
}

function changeName(person: NamePerson) {
  person.name = "Pedro";
}

const person = {
  name: "Daniel",
  age: 24,
  test: 12,
  greet(lastName: string) {
    console.log(`${this.name} ${lastName}`)
  }
};

person.greet('Marchena');

greet(person);
changeName(person);
greet2({name: 'Max', age: 27, greet: () => {}}); //error, it validates that age is not part of the interface
// only with object literals

// interfaces are here to define what is public
// public contracts only
interface Person {
  getName(): string,
}

class Daniel implements Person {
  private name: string;
  constructor() {
    this.name = "Daniel";
  }
  public getName(): string {
      return this.name;
  }
}

// Function types

console.log(new Daniel().getName())

interface DoubleValueFun {
  (number1: number, number2: number) : number;
}

let doubleFunc : DoubleValueFun;
doubleFunc = function (number1: number, number2: number) {
  return number1 * number2;
}

// Interface Inheritance

// This overrides the "optionality" of the age property
interface AgedPerson extends NamePerson {
  age: number
}

const oldPerson : AgedPerson = {
  name: 'Velho',
  age: 50,
  greet(lastName: string) {
    console.log(`${this.name} ${lastName}`)
  }
}

console.log(oldPerson.age)
