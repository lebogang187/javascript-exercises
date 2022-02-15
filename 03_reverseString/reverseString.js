let normalString = "Hello";

const reverseString = function(normalString) {
    let reversedString = "";
    let holder = normalString.split("");
    for(let i = holder.length - 1; i >= 0; i--){
        reversedString += holder[i];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
