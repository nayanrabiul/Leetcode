/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

class WordDictionary {
    constructor() {
        this.root = {};
    }

    addWord(word) {
        let node = this.root;
        for (let c of word) {
            if (node[c] == null) node[c] = {};
            node = node[c];
        }
        node.isWordFinishedHere = true;
    }

    search(word) {
        let result = this.search2(word, this.root, 0);
        return result;
    }

    search2(word, node, index) {
        if (word.length === index) return node.isWordFinishedHere === true;

        let c = word[index];

        if (c === ".") {
            for (let key in node) {
                if (this.search2(word, node[key], index + 1)) return true;
            }
            return false;
        } else {
            if (node[c] === undefined) return false;
            return this.search2(word, node[c], index + 1);
        }
    }
}

let wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True
