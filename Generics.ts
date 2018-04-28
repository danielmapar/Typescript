// Simple Generic
function echo(data: any) {
  return data;
}

console.log(echo("Max"))
console.log(echo(26))
console.log(echo({name: "Max"}))

// Better Generic
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho<String>("Max").length)
console.log(betterEcho<Number>(26))
console.log(betterEcho({name: "Max"}))

// Build-in Generics (array are generics by default)
const testResults : Array<number> = [1.94, 2.33];

// Arrays
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}

printAll<string>(["Daniel", "Pedro", "John"])

// Generic Types
let echo2: <T>(data: T) => T;
echo2 = betterEcho;
echo2<string>("Pedro")

const echo3: <T>(data: T) => T = echo;
echo3<string>("Daniel")

// Generic class
// extends ->> constraint which types can be used in this class
// if T extends U and I pick-up number to be a type of U, T should alse be a number
class SimpleMath<T extends U, U extends number | string> {
  baseValue: T;
  multipleValue: U;

  constructor(baseValue: T, multipleValue: U) {
    this.baseValue = baseValue;
    this.multipleValue = multipleValue;
  }

  calculate() : number {
    return +this.baseValue * +this.multipleValue;
  }
}

const simpleMath = new SimpleMath<number, number>(10, 20);
console.log(simpleMath.calculate());

// My map
class MyMap<T> {
    private map: {[key: string]: T} = {};

    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    getItem(key: string) {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 10);
numberMap.setItem("bananas", 2);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem("apples", "10");
stringMap.setItem("bananas", "2");
console.log(stringMap.getItem("apples"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
