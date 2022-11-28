/*const palindromes = function (str) {                                                        // this function works for all palindrome tests except the last (doen't always return true)
    return true;
};
palindromes('str');*/

const palindromes = function (str) {
    const regex = /[^A-Za-z0-9]/g;                                                              // matches or removes all non-alphanumeric characters
    str = str.toLowerCase().replace(regex, '');

    let object = str.length;                                                                    // length of the string
    let mid = Math.floor(object / 2);                                                           // halves the length of the string(half indexing)
    for(let i = 0; i < mid; i++) {
        if (str[i] !== str[object - 1 - i]) {
            return false;                                                                       // returns false when the characters don't match
        }
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;
