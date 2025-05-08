

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  }
  return input.toUpperCase();
}

console.log("Problem: 01 OutPut");
console.log(formatString("Hello")); 
console.log(formatString("Hello", true)); 
console.log(formatString("Hello", false)); 




function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book D", rating: 4.1 },
];
console.log("Problem: 02 OutPut");
console.log(filterByRating(books));




function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, currentArray) => acc.concat(currentArray), []);
}
console.log("Problem: 03 OutPut");
console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));


class Vehicle {
  private make: string;
  year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}
console.log("Problem: 04 OutPut");
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo()); 
console.log(myCar.getModel()); 



function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}
console.log("Problem: 05 OutPut");
console.log(processValue("hello")); 
console.log(processValue(10)); 



interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  let mostExpensiveProduct = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensiveProduct.price) {
      mostExpensiveProduct = products[i];
    }
  }
  return mostExpensiveProduct;
}
const products = [
  { name: "Pen", price: 510 },
  { name: "Notebook", price: 205 },
  { name: "Bag", price: 50 },
  { name: "Bag1", price: 520 },
];
console.log("Problem: 06 OutPut");
console.log(getMostExpensiveProduct(products));


enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}
console.log("Problem: 07 OutPut");
console.log(getDayType(Day.Monday)); 
console.log(getDayType(Day.Sunday)); 



async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject("Negative number not allowed");
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}

console.log("Problem: 08 OutPut");
squareAsync(5).then(console.log); 
squareAsync(-11).catch(console.error); 
