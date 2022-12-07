const findTheOldest = function(arr) 
{
    let oldest = arr[0];
    
    for(let x = 0; x < arr.length; x++)
    {
        if((oldest.yearOfDeath - oldest.yearOfBirth) < (arr[x].yearOfDeath -arr[x].yearOfBirth)) oldest = arr[x];
    }
    
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
