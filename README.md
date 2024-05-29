# TimSort: Fast Sorting

An adaptive and **stable** sort algorithm based on merging that requires fewer
than nlog(n) comparisons when run on partially sorted arrays. The algorithm uses
`O(n)` memory and still runs in `O(nlogn)` (worst case) on random arrays.\
This implementation is based on the original
[TimSort](http://svn.python.org/projects/python/trunk/Objects/listsort.txt)
developed by Tim Peters for Python's lists.

## Usage

```ts
import { sort } from "@dewars/timsort";

// Sort an array of numbers
const numbers = [5, 3, 2, 8, 7, 4, 1, 6];
sort(numbers);

// Sort an array of objects
const objects = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Alice", age: 27 },
];
sort(objects, (a, b) => a.age - b.age);
```

## Performance

A benchmark is provided in that compares the `timsort` module against the
default `array.sort` method in the numerical sorting of different types of
integer array (as described
[here](http://svn.python.org/projects/python/trunk/Objects/listsort.txt)):

- _Random array_
- _Descending array_
- _Ascending array_
- _Ascending array with 3 random exchanges_
- _Ascending array with 10 random numbers in the end_
- _Array of equal elements_
- _Random Array with many duplicates_
- _Random Array with some duplicates_

| Array Type                  | Length | TimSort.sort | array.sort | Speedup |
| --------------------------- | ------ | ------------ | ---------- | ------- |
| **Random**                  | 10     | 413.27 ns    | 1.06 µs    | 2.57x   |
|                             | 100    | 11.23 µs     | 20.37 µs   | 1.81x   |
|                             | 1000   | 168.19 µs    | 305.82 µs  | 1.82x   |
|                             | 10000  | 2.23 ms      | 3.79 ms    | 1.7x    |
| **Descending**              | 10     | 87.62 ns     | 447.12 ns  | 5.1x    |
|                             | 100    | 855.15 ns    | 3.44 µs    | 4.02x   |
|                             | 1000   | 8.38 µs      | 31.61 µs   | 3.77x   |
|                             | 10000  | 74.79 µs     | 309.7 µs   | 4.14x   |
| **Ascending**               | 10     | 136.32 ns    | 344 ns     | 2.52x   |
|                             | 100    | 1.06 µs      | 2.73 µs    | 2.57x   |
|                             | 1000   | 10.13 µs     | 26.28 µs   | 2.59x   |
|                             | 10000  | 86.54 µs     | 251.65 µs  | 2.91x   |
| **Ascending + 3 Rand Exc**  | 10     | 4.74 µs      | 5.19 µs    | 1.1x    |
|                             | 100    | 7.99 µs      | 10.07 µs   | 1.26x   |
|                             | 1000   | 41.63 µs     | 57.55 µs   | 1.38x   |
|                             | 10000  | 256.39 µs    | 424.09 µs  | 1.65x   |
| **Ascending + 10 Rand End** | 10     | 534.53 ns    | 1.24 µs    | 2.32x   |
|                             | 100    | 4.68 µs      | 5.85 µs    | 1.25x   |
|                             | 1000   | 28.64 µs     | 37.15 µs   | 1.3x    |
|                             | 10000  | 240.29 µs    | 324.78 µs  | 1.35x   |
| **Equal Elements**          | 10     | 163.04 ns    | 361.27 ns  | 2.22x   |
|                             | 100    | 2.1 µs       | 2.86 µs    | 1.36x   |
|                             | 1000   | 19.93 µs     | 27.25 µs   | 1.37x   |
|                             | 10000  | 191.35 µs    | 257.26 µs  | 1.34x   |
| **Many Repetitions**        | 10     | 525.43 ns    | 1.13 µs    | 2.16x   |
|                             | 100    | 12.56 µs     | 20.8 µs    | 1.66x   |
|                             | 1000   | 182 µs       | 291.58 µs  | 1.6x    |
|                             | 10000  | 2.17 ms      | 3.7 ms     | 1.71x   |
| **Some Repetitions**        | 10     | 523.26 ns    | 1.03 µs    | 1.97x   |
|                             | 100    | 12.68 µs     | 20.24 µs   | 1.6x    |
|                             | 1000   | 176.02 µs    | 297.42 µs  | 1.69x   |
|                             | 10000  | 2.41 ms      | 3.63 ms    | 1.5x    |

## Stability

TimSort is _stable_ which means that equal items maintain their relative order
after sorting. Stability is a desirable property for a sorting algorithm.
Consider the following array of items with an height and a weight.

```ts
[
  { height: 100, weight: 80 },
  { height: 90, weight: 90 },
  { height: 70, weight: 95 },
  { height: 100, weight: 100 },
  { height: 80, weight: 110 },
  { height: 110, weight: 115 },
  { height: 100, weight: 120 },
  { height: 70, weight: 125 },
  { height: 70, weight: 130 },
  { height: 100, weight: 135 },
  { height: 75, weight: 140 },
  { height: 70, weight: 140 },
];
```

Items are already sorted by `weight`. Sorting the array according to the item's
`height` with the `timsort` module results in the following array:

```ts
[
  { height: 70, weight: 95 },
  { height: 70, weight: 125 },
  { height: 70, weight: 130 },
  { height: 70, weight: 140 },
  { height: 75, weight: 140 },
  { height: 80, weight: 110 },
  { height: 90, weight: 90 },
  { height: 100, weight: 80 },
  { height: 100, weight: 100 },
  { height: 100, weight: 120 },
  { height: 100, weight: 135 },
  { height: 110, weight: 115 },
];
```
