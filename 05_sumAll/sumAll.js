const sumAll = function() {
    
    if (typeof arguments[0] != 'number'){  // checks if the argument is a number
        return 'ERROR';
    }

    if (typeof arguments[1] != 'number'){  // checks if the argument is a number
        return 'ERROR';
    }

    if (arguments[0] < 0){                 // checks if the number is negative
        return 'ERROR';
    }

    if (arguments[1] < 0){                 // checks if the number is negative
        return 'ERROR';
    }

    let smallest;
    let biggest;

   if (arguments[0] > arguments[1]){
       biggest = arguments[0];
       smallest = arguments[1];
    } else {
       biggest = arguments[1];
       smallest = arguments[0];       //checks the biggest number
    }

    let sum = 0;

    for(let i = smallest; i <= biggest; i++){
        sum += i;
      
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
