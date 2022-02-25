const leapYears = function() {
    if (arguments[0] % 4 === 0 && arguments[0] % 100 === 0 && arguments[0] % 400 === 0) {
        return true;
    } else if (arguments[0] % 4 === 0 && arguments[0] % 100 === 0) {
        return false;
    }  else if (arguments[0] % 4 === 0) {
        return true;
    } else if (arguments[0] % 400 === 0) {
        return true; 
    } else if (arguments[0] % 100 === 0) {
        return false;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
