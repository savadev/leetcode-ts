# 169. Majority Element

Given an array of size n, find the majority element. The majority element is the element that appears more than `⌊ n/2 ⌋` times.

You may assume that the array is non-empty and the majority element always exist in the array.

## Example

```bash
Input: [3,2,3]
Output: 3
```

```bash
Input: [2,2,1,1,1,2,2]
Output: 2
```

## Related Topics

- Array
- Divide and Conquer
- Bit Manipulation

## Submissions

### I: 通用解法

- Time: 2019.03.01
- Status: Accepted
- Runtime: 68ms > 87.42%
```typescript
var majorityElement = function(nums: number[]) {
  let map: any = {};
  nums.forEach(n => {
    if (n in map) {
      map[n]++;
    } else {
      map[n] = 1;
    }
  });
  let maximum = 0;
  let maxKey = undefined;

  for (let k in map) {
    if (map[k] >= maximum) {
      maximum = map[k];
      maxKey = k;
    }
  }
  return maxKey;
};
```

## Top Ranked
