/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    strs.forEach((value) => {
        let str = stringToAnargramArray(value);
        if (!map.has(str)) {
            map.set(str, [value]);
        } else {
            map.set(str, [...map.get(str), value]);
        }
    });
    let result = [];
    map.forEach((value) => {
        result.push(value);
    });
    return result;
};

var stringToAnargramArray = function (s) {
    const alphabet_s = new Array(224).fill(null);

    for (let i = 0; i < s.length; i++) {
        let aschis = s[i].charCodeAt(0);

        alphabet_s[aschis]
            ? (alphabet_s[aschis] += 1)
            : (alphabet_s[aschis] = 1);
    }

    return JSON.stringify(alphabet_s);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
