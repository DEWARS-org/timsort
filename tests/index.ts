import { expect } from "@std/expect";
import { arrayGenerator } from "./arrayGenerator.ts";
import { sort } from "../mod.ts";

const lengths = [10, 100, 1000, 10000];
const repetitions = 10;

function numberCompare(a: number, b: number) {
  return a - b;
}

Deno.test("Sort a Random Array", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const arr1 = arrayGenerator.randomInt(length);
      const arr2 = arr1.slice();

      sort(arr1, numberCompare);
      arr2.sort(numberCompare);

      expect(arr1).toEqual(arr2);
    }
  });
});

Deno.test("Sort a Descending Array", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const arr1 = arrayGenerator.descendingInt(length);
      const arr2 = arr1.slice();

      sort(arr1, numberCompare);
      arr2.sort(numberCompare);

      expect(arr1).toEqual(arr2);
    }
  });
});

Deno.test("Sort an Ascending Array", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const arr1 = arrayGenerator.ascendingInt(length);
      const arr2 = arr1.slice();

      sort(arr1, numberCompare);
      arr2.sort(numberCompare);

      expect(arr1).toEqual(arr2);
    }
  });
});

Deno.test("Sort an Ascending Array with 3 Random Exchanges", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const arr1 = arrayGenerator.ascending3RandomExchangesInt(length);
      const arr2 = arr1.slice();

      sort(arr1, numberCompare);
      arr2.sort(numberCompare);

      expect(arr1).toEqual(arr2);
    }
  });
});

Deno.test("Sort an Ascending Array with 10 Random Elements at Last", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const arr1 = arrayGenerator.ascending10RandomEndInt(length);
      const arr2 = arr1.slice();

      sort(arr1, numberCompare);
      arr2.sort(numberCompare);

      expect(arr1).toEqual(arr2);
    }
  });
});

Deno.test("Sort an Array of all Equal Elements", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const arr1 = arrayGenerator.allEqualInt(length);
      const arr2 = arr1.slice();

      sort(arr1, numberCompare);
      arr2.sort(numberCompare);

      expect(arr1).toEqual(arr2);
    }
  });
});

Deno.test("Sort an Array with Many Duplicates", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const arr1 = arrayGenerator.manyDuplicateInt(length);
      const arr2 = arr1.slice();

      sort(arr1, numberCompare);
      arr2.sort(numberCompare);

      expect(arr1).toEqual(arr2);
    }
  });
});

Deno.test("Sort an Array with Some Duplicates", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const arr1 = arrayGenerator.someDuplicateInt(length);
      const arr2 = arr1.slice();

      sort(arr1, numberCompare);
      arr2.sort(numberCompare);

      expect(arr1).toEqual(arr2);
    }
  });
});

Deno.test("Sort Subrange of a Random Array", () => {
  for (const length of lengths) {
    for (let i = 0; i < repetitions; i++) {
      const lo = Math.trunc(length / 4);
      const hi = length - lo;
      const arr1 = arrayGenerator.randomInt(length);
      const arr2 = arr1.slice(lo, hi);
      sort(arr1, numberCompare, lo, hi);
      arr2.sort(numberCompare);

      let j = 0;
      while (lo + j < hi) {
        expect(arr1[lo + j]).toEqual(arr2[j]);
        j++;
      }
    }
  }
});

Deno.test("Sort Subrange of a Descending Array", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const lo = Math.trunc(length / 4);
      const hi = length - lo;
      const arr1 = arrayGenerator.descendingInt(length);
      const arr2 = arr1.slice(lo, hi);

      sort(arr1, numberCompare, lo, hi);
      arr2.sort(numberCompare);

      let j = 0;
      while (lo + j < hi) {
        expect(arr1[lo + j]).toEqual(arr2[j]);
        j++;
      }
    }
  });
});

Deno.test("Sort Subrange of an Ascending Array", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const lo = Math.trunc(length / 4);
      const hi = length - lo;
      const arr1 = arrayGenerator.ascendingInt(length);
      const arr2 = arr1.slice(lo, hi);

      sort(arr1, numberCompare, lo, hi);
      arr2.sort(numberCompare);

      let j = 0;
      while (lo + j < hi) {
        expect(arr1[lo + j]).toEqual(arr2[j]);
        j++;
      }
    }
  });
});

Deno.test(
  "Sort Subrange of an Ascending Array with 3 Random Exchanges",
  function () {
    lengths.forEach(function (length) {
      for (let i = 0; i < repetitions; i++) {
        const lo = Math.trunc(length / 4);
        const hi = length - lo;
        const arr1 = arrayGenerator.ascending3RandomExchangesInt(length);
        const arr2 = arr1.slice(lo, hi);

        sort(arr1, numberCompare, lo, hi);
        arr2.sort(numberCompare);

        let j = 0;
        while (lo + j < hi) {
          expect(arr1[lo + j]).toEqual(arr2[j]);
          j++;
        }
      }
    });
  },
);

Deno.test(
  "Sort Subrange of an Ascending Array with 10 Random Elements at Last",
  function () {
    lengths.forEach(function (length) {
      for (let i = 0; i < repetitions; i++) {
        const lo = Math.trunc(length / 4);
        const hi = length - lo;
        const arr1 = arrayGenerator.ascending10RandomEndInt(length);
        const arr2 = arr1.slice(lo, hi);

        sort(arr1, numberCompare, lo, hi);
        arr2.sort(numberCompare);

        let j = 0;
        while (lo + j < hi) {
          expect(arr1[lo + j]).toEqual(arr2[j]);
          j++;
        }
      }
    });
  },
);

Deno.test("Sort Subrange of an Array of all Equal Elements", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const lo = Math.trunc(length / 4);
      const hi = length - lo;
      const arr1 = arrayGenerator.allEqualInt(length);
      const arr2 = arr1.slice(lo, hi);

      sort(arr1, numberCompare, lo, hi);
      arr2.sort(numberCompare);

      let j = 0;
      while (lo + j < hi) {
        expect(arr1[lo + j]).toEqual(arr2[j]);
        j++;
      }
    }
  });
});

Deno.test("Sort Subrange of an Array with Many Duplicates", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const lo = Math.trunc(length / 4);
      const hi = length - lo;
      const arr1 = arrayGenerator.manyDuplicateInt(length);
      const arr2 = arr1.slice(lo, hi);

      sort(arr1, numberCompare, lo, hi);
      arr2.sort(numberCompare);

      let j = 0;
      while (lo + j < hi) {
        expect(arr1[lo + j]).toEqual(arr2[j]);
        j++;
      }
    }
  });
});

Deno.test("Sort Subrange of an Array with Some Duplicates", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const lo = Math.trunc(length / 4);
      const hi = length - lo;
      const arr1 = arrayGenerator.someDuplicateInt(length);
      const arr2 = arr1.slice(lo, hi);

      sort(arr1, numberCompare, lo, hi);
      arr2.sort(numberCompare);

      let j = 0;
      while (lo + j < hi) {
        expect(arr1[lo + j]).toEqual(arr2[j]);
        j++;
      }
    }
  });
});

Deno.test("Lexicographically Sort a Random Array", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const arr1 = arrayGenerator.randomInt(length);
      const arr2 = arr1.slice();

      sort(arr1);
      arr2.sort();

      expect(arr1).toEqual(arr2);
    }
  });
});

Deno.test("Lexicographically Sort a Descending Array", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const arr1 = arrayGenerator.descendingInt(length);
      const arr2 = arr1.slice();

      sort(arr1);
      arr2.sort();

      expect(arr1).toEqual(arr2);
    }
  });
});

Deno.test("Lexicographically Sort an Ascending Array", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const arr1 = arrayGenerator.ascendingInt(length);
      const arr2 = arr1.slice();

      sort(arr1);
      arr2.sort();

      expect(arr1).toEqual(arr2);
    }
  });
});

Deno.test(
  "Lexicographically Sort an Ascending Array with 3 Random Exchanges",
  function () {
    lengths.forEach(function (length) {
      for (let i = 0; i < repetitions; i++) {
        const arr1 = arrayGenerator.ascending3RandomExchangesInt(length);
        const arr2 = arr1.slice();

        sort(arr1);
        arr2.sort();

        expect(arr1).toEqual(arr2);
      }
    });
  },
);

Deno.test(
  "Lexicographically Sort an Ascending Array with 10 Random Elements at Last",
  function () {
    lengths.forEach(function (length) {
      for (let i = 0; i < repetitions; i++) {
        const arr1 = arrayGenerator.ascending10RandomEndInt(length);
        const arr2 = arr1.slice();

        sort(arr1);
        arr2.sort();

        expect(arr1).toEqual(arr2);
      }
    });
  },
);

Deno.test("Lexicographically Sort an Array of all Equal Elements", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const arr1 = arrayGenerator.allEqualInt(length);
      const arr2 = arr1.slice();

      sort(arr1);
      arr2.sort();

      expect(arr1).toEqual(arr2);
    }
  });
});

Deno.test("Lexicographically Sort an Array with Many Duplicates", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const arr1 = arrayGenerator.manyDuplicateInt(length);
      const arr2 = arr1.slice();

      sort(arr1);
      arr2.sort();

      expect(arr1).toEqual(arr2);
    }
  });
});

Deno.test("Lexicographically Sort an Array with Some Duplicates", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const arr1 = arrayGenerator.someDuplicateInt(length);
      const arr2 = arr1.slice();

      sort(arr1);
      arr2.sort();

      expect(arr1).toEqual(arr2);
    }
  });
});

Deno.test("Lexicographically Sort Subrange of a Random Array", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const lo = Math.trunc(length / 4);
      const hi = length - lo;
      const arr1 = arrayGenerator.randomInt(length);
      const arr2 = arr1.slice(lo, hi);

      sort(arr1, undefined, lo, hi);
      arr2.sort();

      let j = 0;
      while (lo + j < hi) {
        expect(arr1[lo + j]).toEqual(arr2[j]);
        j++;
      }
    }
  });
});

Deno.test("Lexicographically Sort Subrange of a Descending Array", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const lo = Math.trunc(length / 4);
      const hi = length - lo;
      const arr1 = arrayGenerator.descendingInt(length);
      const arr2 = arr1.slice(lo, hi);

      sort(arr1, undefined, lo, hi);
      arr2.sort();

      let j = 0;
      while (lo + j < hi) {
        expect(arr1[lo + j]).toEqual(arr2[j]);
        j++;
      }
    }
  });
});

Deno.test("Lexicographically Sort Subrange of an Ascending Array", () => {
  lengths.forEach(function (length) {
    for (let i = 0; i < repetitions; i++) {
      const lo = Math.trunc(length / 4);
      const hi = length - lo;
      const arr1 = arrayGenerator.ascendingInt(length);
      const arr2 = arr1.slice(lo, hi);

      sort(arr1, undefined, lo, hi);
      arr2.sort();

      let j = 0;
      while (lo + j < hi) {
        expect(arr1[lo + j]).toEqual(arr2[j]);
        j++;
      }
    }
  });
});

Deno.test(
  "Lexicographically Sort Subrange of an Ascending " +
    "Array with 3 Random Exchanges",
  function () {
    lengths.forEach(function (length) {
      for (let i = 0; i < repetitions; i++) {
        const lo = Math.trunc(length / 4);
        const hi = length - lo;
        const arr1 = arrayGenerator.ascending3RandomExchangesInt(length);
        const arr2 = arr1.slice(lo, hi);

        sort(arr1, undefined, lo, hi);
        arr2.sort();

        let j = 0;
        while (lo + j < hi) {
          expect(arr1[lo + j]).toEqual(arr2[j]);
          j++;
        }
      }
    });
  },
);

Deno.test(
  "Lexicographically Sort Subrange of an Ascending Array " +
    "with 10 Random Elements at Last",
  function () {
    lengths.forEach(function (length) {
      for (let i = 0; i < repetitions; i++) {
        const lo = Math.trunc(length / 4);
        const hi = length - lo;
        const arr1 = arrayGenerator.ascending10RandomEndInt(length);
        const arr2 = arr1.slice(lo, hi);

        sort(arr1, undefined, lo, hi);
        arr2.sort();

        let j = 0;
        while (lo + j < hi) {
          expect(arr1[lo + j]).toEqual(arr2[j]);
          j++;
        }
      }
    });
  },
);

Deno.test(
  "Lexicographically Sort Subrange of an Array of all Equal Elements",
  function () {
    lengths.forEach(function (length) {
      for (let i = 0; i < repetitions; i++) {
        const lo = Math.trunc(length / 4);
        const hi = length - lo;
        const arr1 = arrayGenerator.allEqualInt(length);
        const arr2 = arr1.slice(lo, hi);

        sort(arr1, undefined, lo, hi);
        arr2.sort();

        let j = 0;
        while (lo + j < hi) {
          expect(arr1[lo + j]).toEqual(arr2[j]);
          j++;
        }
      }
    });
  },
);

Deno.test(
  "Lexicographically Sort Subrange of an Array with Many Duplicates",
  function () {
    lengths.forEach(function (length) {
      for (let i = 0; i < repetitions; i++) {
        const lo = Math.trunc(length / 4);
        const hi = length - lo;
        const arr1 = arrayGenerator.manyDuplicateInt(length);
        const arr2 = arr1.slice(lo, hi);

        sort(arr1, undefined, lo, hi);
        arr2.sort();

        let j = 0;
        while (lo + j < hi) {
          expect(arr1[lo + j]).toEqual(arr2[j]);
          j++;
        }
      }
    });
  },
);

Deno.test(
  "Lexicographically Sort Subrange of an Array with Some Duplicates",
  function () {
    lengths.forEach(function (length) {
      for (let i = 0; i < repetitions; i++) {
        const lo = Math.trunc(length / 4);
        const hi = length - lo;
        const arr1 = arrayGenerator.someDuplicateInt(length);
        const arr2 = arr1.slice(lo, hi);

        sort(arr1, undefined, lo, hi);
        arr2.sort();

        let j = 0;
        while (lo + j < hi) {
          expect(arr1[lo + j]).toEqual(arr2[j]);
          j++;
        }
      }
    });
  },
);
