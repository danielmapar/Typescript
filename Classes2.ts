class Person {
  public name: string;
  defaultIsPublic: string;
  private type: number;
  protected sharedBetweenChild: string = 'Shareed';

  // In the constructor we can tell typescript
  // to create a property that is not only bounded to this function
  // but that will be also available as part of the class definition
  constructor(name: string, public username: string) {
    this.name = 'Daniel';
    this.defaultIsPublic = 'Default';
    this.type = 10;
    this.sharedBetweenChild = 'Shared';
  }

  printType() {
    console.log(this.type)
  }

  setType(type: number) {
    this.type = type;
  }
}

const PersonObj = new Person("Teste", "PUBLIC");
console.log(PersonObj.printType());
console.log(PersonObj.setType(10));
console.log(PersonObj.printType());

// Inheritance
class Daniel extends Person {
  constructor() {
    super("Daniel", "YES");
  }

  getProtected() {
    return this.sharedBetweenChild;
  }
}

const daniel: Daniel = new Daniel();
console.log(daniel.getProtected());

class Pedro extends Person {
  private _age : number = 10;
  set age(age: number) {
    this._age = age;
  }
  get age() {
    return this.age;
  }
}

// Static properties

class Helpers {
  static PI: number = 3.14;
}

console.log("Helpers: ", Helpers.PI);

// Abstract classes
abstract class Project {
  projectName: string = "Default";
  public abstract budget: number;

  abstract changeName(name: string) : void;

  calcBudget() {
    return this.budget * 2;
  }
}

class NewProject extends Project {
  budget = 10;
  constructor() {
    super();
    this.budget = 10;
  }
  changeName(name: string) {
    this.projectName = name;
  }
}

console.log(new NewProject().changeName('Daniel'));

// Private constructors

class OnlyOne {
  private static instance: OnlyOne;
  public readonly name: string;
  private constructor(name: string) {
    this.name = name;
  }

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The only one');
    }
    return OnlyOne.instance;
  }
}

let instance = OnlyOne.getInstance();
console.log(instance)
// instance.name = "pedro" -> Cant, because it is readonly
