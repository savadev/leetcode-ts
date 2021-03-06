/**
# 202. Happy Number

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

## Example

```bash
Input: 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
```
 */
type Submission = (n: number) => boolean;

/**
 *
 * 一开始以为这题很简单，也没仔细考虑；使用了 Array.reduce() 和 While 控制语句完事；跑测试用例时才发现，第二条用例就没有通过。问题出在时间复杂度上，这里必须对死循环进行处理。
 * @time 2019.03.15
 * @status Time Limit Exceeded
 * @case `2`
 */
export const isHappy: Submission = (n: number): boolean => {
  let result: number = n;
  let f = (n: number): any =>
    String(n)
      .split('')
      .reduce((x: string, y: string) =>
        String(Math.pow(Number(x), 2) + Math.pow(Number(y), 2))
      );
  while (result !== 1) {
    result = f(result);
  }
  return true;
};
