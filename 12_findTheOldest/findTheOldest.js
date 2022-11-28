const findTheOldest = function(people) {
    let sorted = people.sort((a, b) => {

        //create year of death where it doesn't exist
        if(!a.yearOfDeath){
            a['yearOfDeath'] = new Date().getFullYear();
        }
        if(!b.yearOfDeath){
            b['yearOfDeath'] = new Date().getFullYear();
        }

        //calculates the age
        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;
        if(aAge > bAge){
            return -1;                                             // returns from oldest to youngest
        }
        else{
            return 1;
        }
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
