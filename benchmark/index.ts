import { sort } from "../mod.ts";
import { arrayGenerator } from "../tests/arrayGenerator.ts";

const lengths = [10, 100, 1000, 10000];

function numberCompare(a: number, b: number): number {
  return a - b;
}

for (const generatorName in arrayGenerator) {
  if (Object.hasOwn(arrayGenerator, generatorName)) {
    const generator = arrayGenerator[generatorName];

    for (const length of lengths) {
      Deno.bench({
        group: `${generatorName}:${length}`,
        name: "TimSort",
        fn: () => {
          const arr = generator(length);
          sort(arr, numberCompare);
        },
      });

      Deno.bench({
        group: `${generatorName}:${length}`,
        name: "Default Sort",
        fn: () => {
          const arr = generator(length);
          arr.sort(numberCompare);
        },
      });
    }
  }
}
