/**
# 240. Search a 2D Matrix II

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

- Integers in each row are sorted in ascending from left to right.
- Integers in each column are sorted in ascending from top to bottom.

## Example

Consider the following matrix:

```bash
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
```

Given target = `5`, return `true`.

Given target = `20`, return `false`.
 */
type Submission = (matrix: number[][], target: number) => boolean;

/**
 * 双层遍历
 * @time 2019.03.05
 * @status Accepted
 * @runtime 460 ms > 22.93%
 * @momery 37.1 MB < 100.00%
 */
export const searchMatrix: Submission = (
  matrix: number[][],
  target: number
): boolean => {
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};
