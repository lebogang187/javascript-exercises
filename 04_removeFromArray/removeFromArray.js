/*let theArray = ["Nic", "Lebo", "Diago", "Yaseen"];
let toRemove = "Diago"; (these were just for clarification purposes)
*/

const removeFromArray = function(theArray) {
    for(let i = 1; i <= arguments.length - 1; i++){          //the for-loop, loops through all the arrays and arguments to see if it meets the conditions and where to start looping.
        let indexToRemove = theArray.indexOf(arguments[i]);  //determines the index of the arguments 
        if(indexToRemove > - 1){                             //determines the conditions of the index to be removed 
            theArray.splice(indexToRemove, 1);               // removes the index positioned by the number
        }
    }
    return theArray;

    

};

// Do not edit below this line
module.exports = removeFromArray;
