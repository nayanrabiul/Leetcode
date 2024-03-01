/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

class Trie {
    constructor() {
        this.root = {};
    }
    insert(word) {
        let node = this.root;
        for (let c of word) {
            if (node[c] == null) node[c] = {};
            node = node[c];
        }
        node.isWordFinishedHere = true;
    }
    search(word) {
        let node = this.root;
        for (let c of word) {
            if (node[c] == null) return false;
            node = node[c];
        }
        if (node.isWordFinishedHere) {
            return true;
        } else {
            return false;
        }
    }
    startsWith(word) {
        let node = this.root;
        for (let c of word) {
            if (node[c] == null) return false;
            node = node[c];
        }
        return true;
    }
}

var obj = new Trie();
obj.insert("apple");
console.log(JSON.stringify(obj));
var param_1 = obj.search("apple");
var param_2 = obj.search("apa");
var param_3 = obj.startsWith("apa");

console.log(param_1, param_2, param_3);
