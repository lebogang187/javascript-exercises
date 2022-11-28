const fibonacci = function(fib) {
    if(fib <= 0){
        return "OOPS"
    }
    else if(fib == 1){
        return 1;
    }
    else if(fib == 2){
        return 1;
    }
    else{
        let arrayFib = [1,1];

        for(let i = 1; i <= fib - 2; i++){
            finalFib = arrayFib[i] + arrayFib[i-1];
            arrayFib.push(finalFib); 
        }
        return finalFib;
    }
};

// Do not edit below this line
module.exports = fibonacci;
