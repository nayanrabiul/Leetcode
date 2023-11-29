/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // let x1 = s.split("").sort().join("");
    // let x2 = t.split("").sort().join("");
    // if (x1 == x2) return true;
    // else return false;

    if (s.length !== t.length) return false;
    const alphabet_s = new Array(224).fill(null);
    const alphabet_t = new Array(224).fill(null);

    for (let i = 0; i < s.length; i++) {
        let aschis = s[i].charCodeAt(0);
        let aschit = t[i].charCodeAt(0);

        alphabet_s[aschis]
            ? (alphabet_s[aschis] += 1)
            : (alphabet_s[aschis] = 1);
        alphabet_t[aschit]
            ? (alphabet_t[aschit] += 1)
            : (alphabet_t[aschit] = 1);
    }

    return JSON.stringify(alphabet_s) == JSON.stringify(alphabet_t);
};

console.log(isAnagram("bangladesh", "tbngladesh"));
