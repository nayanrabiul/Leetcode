var lengthOfLongestSubstring = function (s) {
    let longestLength = 0;
    let window = new Set();
    let left_pointer = 0;
    for (let i = 0; i < s.length; i++) {
        const element = s[i];

        while (window.has(element)) {
            window.delete(s[left_pointer]);
            left_pointer++;
        }

        window.add(element);
        longestLength = Math.max(window.size, longestLength);
    }

    return longestLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("a"));
