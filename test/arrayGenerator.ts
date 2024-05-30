export interface ArrayGenerator {
  [key: string]: (n: number) => number[];
}

export const arrayGenerator: ArrayGenerator = {
  randomInt: function (n: number) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(Math.random() * 9007199254740992);
    }
    return arr;
  },

  descendingInt: function (n: number) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(n - i);
    }
    return arr;
  },

  ascendingInt: function (n: number) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  },

  ascending3RandomExchangesInt: function (n: number) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    for (let i = 0; i < 1; i++) {
      const first = Math.random() * n;
      const second = Math.random() * n;
      const tmp: number = arr[first];
      arr[first] = arr[second];
      arr[second] = tmp;
    }
    return arr;
  },

  ascending10RandomEndInt: function (n: number) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    const endStart = n - 10;
    for (let i = endStart; i < n; i++) {
      arr[i] = Math.random() * n;
    }
    return arr;
  },

  allEqualInt: function (n: number) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(42);
    }
    return arr;
  },

  manyDuplicateInt: function (n: number) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(Math.random() * (n / 2 * (Math.log(n) / Math.LN10)));
    }
    return arr;
  },

  someDuplicateInt: function (n: number) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(Math.random() * n);
    }
    return arr;
  },
};
