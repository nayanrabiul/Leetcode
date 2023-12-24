var characterReplacement = function (s, k) {
    let window = new Map();

    //this funciton inser the element to the map and return the count of highest present element
    let insertToWindow = (char) => {
        if (window.has(char)) {
            window.set(char, window.get(char) + 1);
        } else {
            window.set(char, 1);
        }
        let max_len_current_window = 0;
        for (let [key, value] of window) {
            if (value > max_len_current_window) max_len_current_window = value;
        }
        return max_len_current_window;
    };

    let left_pointer = 0;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let max = insertToWindow(s[i]);
        while (i - left_pointer + 1 - max > k) {
            window.set(s[left_pointer], window.get(s[left_pointer]) - 1);
            left_pointer++;
        }
        result = Math.max(result, i - left_pointer + 1);
    }

    return result;
};

characterReplacement("AABABBA", 1);
