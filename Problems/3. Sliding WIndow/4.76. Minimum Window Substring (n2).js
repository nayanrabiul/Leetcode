/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

let len = (a) => Object.keys(a).length;
var minWindow = function (s, t) {
    if (len(s) < len(t)) return "";
    let sObj = {};
    let tObj = {};

    for (let i = 0; i < t.length; i++) {
        sObj[t[i]] = 0;
        if (tObj[t[i]]) {
            tObj[t[i]]++;
        } else {
            tObj[t[i]] = 1;
        }
    }

    let tools = {
        match2Obj: (objS, objt) => {
            for (let key in objS) {
                if (objS[key] >= objt[key]) {
                    continue;
                } else return false;
            }
            return true;
        },

        addTOSObj: (c) => {
            if (sObj.hasOwnProperty(c)) {
                sObj[c]++;
            }
        },
        removedToObj: (c) => {
            if (sObj[c] > 0) {
                sObj[c]--;
            }
        },
    };

    let start = 0;
    let result = "";
    let minLen = Number.POSITIVE_INFINITY;

    for (let end = 0; end < s.length; end++) {
        const element = s[end];
        tools.addTOSObj(element);
        if (tools.match2Obj(sObj, tObj)) {
            while (tools.match2Obj(sObj, tObj)) {
                let needtoremoved = s[start];
                tools.removedToObj(needtoremoved);
                let length = end - start + 1;
                if (length < minLen) {
                    result = s.slice(start, end + 1); // Fix: Include the last character
                    minLen = result.length;
                }
                start++;
            }
        }
    }
    return result;
};

// console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "at"));
// console.log(minWindow("a", "aa"));
