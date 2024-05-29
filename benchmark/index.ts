import { sort } from "../mod.ts";
import { arrayGenerator } from "../tests/arrayGenerator.ts";

const lengths = [10, 100, 1000, 10000];

function numberCompare(a: number, b: number): number {
  return a - b;
}

function repetitionsFromLength(n: number): number {
  return Math.floor(12000000 / (n * (Math.log(n) / Math.LN10)));
}

class PrettyPrinter {
  private str: string = "";

  addAt(value: string | number, at: number): void {
    while (at > this.str.length) {
      this.str += " ";
    }
    this.str += value.toString();
  }

  toString(): string {
    return this.str;
  }
}

const defaultResults: { [key: string]: { [key: number]: number } } = {};
const timsortResults: { [key: string]: { [key: number]: number } } = {};

const printer = new PrettyPrinter();
printer.addAt("ArrayType", 0);
printer.addAt("Length", 30);
printer.addAt("TimSort", 37);
printer.addAt("array.sort", 47);
printer.addAt("Speedup", 59);
console.log(printer.toString());

for (const generatorName in arrayGenerator) {
  if (Object.hasOwn(arrayGenerator, generatorName)) {
    const generator = arrayGenerator[generatorName];
    defaultResults[generatorName] = {};
    timsortResults[generatorName] = {};

    for (const length of lengths) {
      let defaultTime = 0;
      let timsortTime = 0;
      const repetitions = repetitionsFromLength(length);

      for (let i = 0; i < repetitions; i++) {
        const arr1 = generator(length);
        const arr2 = [...arr1];

        const start = performance.now();
        arr1.sort(numberCompare);
        const end = performance.now();
        defaultTime += end - start;

        const timsortStart = performance.now();
        sort(arr2, numberCompare);
        const timsortEnd = performance.now();
        timsortTime += timsortEnd - timsortStart;
      }

      defaultResults[generatorName][length] = defaultTime / repetitions;
      timsortResults[generatorName][length] = timsortTime / repetitions;

      const newPrinter = new PrettyPrinter();
      newPrinter.addAt(generatorName, 0);
      newPrinter.addAt(length, 30);
      newPrinter.addAt(Math.floor(timsortResults[generatorName][length]), 37);
      newPrinter.addAt(Math.floor(defaultResults[generatorName][length]), 47);
      newPrinter.addAt(
        (defaultResults[generatorName][length] /
          timsortResults[generatorName][length]).toFixed(2),
        59,
      );
      console.log(newPrinter.toString());
    }
  }
}
