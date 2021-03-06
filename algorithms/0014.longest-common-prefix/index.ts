/**
# 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

## Example

```bash
Input: ["flower","flow","flight"]
Output: "fl"
```

```bash
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

## Note

All given inputs are in lowercase letters `a-z`.
 */
type Submission = (strs: string[]) => string;

/**
 * 循环遍历
 * 刚拿到这题没有细想，认为这题比较简单；直接使用循环遍历的方式一遍一遍顺序访问数组。
 * 当子字符串不相等时 Break，结果却超时了。简单了分析了原因在长数组的情况下，过多的进行了顺序访问，实践复杂度为 O(k\*n)。
 * 便放弃广度优先，改为深读优先。后面发现，是长度为 1 的数组进入了死循环。
 * @time
 * @status Time Limit Exceeded
 */
export const longestCommonPrefix: Submission = (strs: string[]): string => {
  let prefix: string = '';
  if (strs && strs.length > 0) {
    let point = 1;
    while (true) {
      prefix = strs[0].slice(0, point);
      for (let i = 0; i < strs.length; i++) {
        if (prefix !== strs[i].slice(0, point)) {
          return prefix.slice(0, prefix.length - 1);
        }
      }
      point++;
    }
  } else {
    return '';
  }
};

/**
 * 单次遍历
 * 没有兼容好空字符串的问题（PS:条件不是 a-z 么？WTF?）
 * @time
 * @status Time Limit Exceeded
 * @case `["",""]`
 */
export const longestCommonPrefix1: Submission = (strs: string[]): string => {
  let prefix: string = '';
  if (strs.length == 1) {
    return strs[0];
  } else if (strs.length > 1) {
    let point = 1;
    while (true) {
      prefix = strs[0].slice(0, point);
      for (let i = 0; i < strs.length; i++) {
        if (prefix !== strs[i].slice(0, point)) {
          return prefix.slice(0, prefix.length - 1);
        }
      }
      point++;
    }
  } else {
    return '';
  }
};

/**
 * 单次遍历
 * 使用 `strs[0]` 作为初始前缀串，逐一遍历 `strs[]` 元素进行比较，如 `String.indexOf !== 0` 则自减长度 1，直至成立后继续访问后面的元素。
 * @time 2019.03.26
 * @status Accepted
 * @runtime 60ms < 97.88%
 * @memory 33.8MB < 86.74%
 */
export const longestCommonPrefix2: Submission = (strs: string[]): string => {
  if (strs && strs.length > 0) {
    let prefix: string = strs[0]; // 使用 strs[0] 作为初始前缀串
    for (let i = 1; i < strs.length; i++) {
      let subStr = strs[i];
      while (subStr.indexOf(prefix) !== 0) {
        // 不存在前缀子串
        prefix = prefix.slice(0, prefix.length - 1);
        if (prefix.length == 0) {
          return '';
        }
      }
    }
    return prefix;
  } else {
    return '';
  }
};
