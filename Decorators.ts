// Class decorators

function logged(constructorFn: Function) {
  console.log(constructorFn);
}
@logged
class Person {
  constructor() {
    console.log("Hi")
  }
}

// Factory
function logging(value: boolean) : any {
  return value ? logged : null;
}
@logging(false)
class Car {

}

// Advanced
function printable(constructorFn: Function) {
  // Any object that uses this decorator will receive the print method
  //
  constructorFn.prototype.print = function() {
    console.log(this);
  }
}
/*
You can pass arguments to decorator factories - and @Component()
is a factory. It's not @Component  (notice the absence of the () ).
A factory is a function that returns a decorator if you want to put it
like this. And you can pass an argument you want to such a factory
(which then in turn can do whatever it wants with the data).
*/
@logging(true)
@printable
class Plant {
  name = "Test";
}
const plant = new Plant();
(<any>plant).print();

// Method decorator
// Property decorator
function editable(value: boolean) {
  return function(target: any, propName: string, descriptor: PropertyDescriptor) {
    // Descriptor comes from the Object.defineProperty
    // Descriptor allows you to configure an object (if readable/writable)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
    descriptor.writable = value;
  }
}

function overwritable(value: boolean) {
  // No PropertyDescriptor for properties
  return function(target: any, propName: string) : any {
    const newDescriptor : PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  }
}

class Project {
  // This decorator locks any changes to this property (including the constructor)
  //@overwritable(false)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)
  calcBudget() {
    console.log(1000);
  }

}

const project = new Project("test");
project.calcBudget();
//project.calcBudget = function() {
//  console.log(500)
//}
project.calcBudget();

// Parameter decorator
// target is the constructor of the class, or the prototype depending if it is a static class or not
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log("Target: ", target);
  console.log("methodName: ", methodName);
  console.log("paramIndex: ", paramIndex);
}
class Course {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll){
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}
const course = new Course("test");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
