/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

let len = (a) => Object.keys(a).length;
var minWindow = function (s, t) {
    if (s === "") return s;
    //convert t string to object with key as char and value as count
    let tObj = {};
    let sObj = {};
    for (let i = 0; i < t.length; i++) {
        sObj[t[i]] = 0;
        if (tObj[t[i]]) {
            tObj[t[i]]++;
        } else {
            tObj[t[i]] = 1;
        }
    }

    let has = 0;
    let need = Object.keys(tObj).length;
    let min = s.length;

    let tools = {
        addToObjs: (s) => {
            // , add check numbers if equal in t objs ? then update has
            if (!!sObj[s]) {
                sObj[s] += 1;
            } else sObj[s] = 1;
            //update has
            if (sObj[s] === tObj[s]) has++;
        },
        removeFromObjs: (s) => {
            if (!!tObj[s]) {
                sObj[s] -= 1;
                if (sObj[s] < tObj[s]) {
                    has--;
                }
            } else has--;
            // , add check numbers if equal in t objs ? then update has
        },
        canAddAble: (s) => {
            //there can be 0
            return !!tObj[s];
        },
    };

    let start = 0;
    let result = "";
    for (let end = 0; end < s.length; end++) {
        //first check, if s[end] in tobjs by canAddable
        if (tools.canAddAble(s[end])) {
            //if addable,incrise count ot s in Sobj and update has inside there
            tools.addToObjs(s[end]);
            //check if has === need then check and update minimum
            while (has === need) {
                if (min >= end - start + 1) {
                    min = end - start + 1;
                    result = s.substring(start, end + 1);
                }
                if (tools.canAddAble(s[start])) {
                    tools.removeFromObjs(s[start]);
                    start++;
                } else start++;
            }
        }
    }
    return result;
};

console.log(minWindow("ADOBECODEBANC", (t = "ABC")));
console.log(minWindow("cabwefgewcwaefgcf", (t = "cae"))); //cwae
console.log(minWindow("a", (t = "a")));
console.log(minWindow("a", (t = "aa")));
