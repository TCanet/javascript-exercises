const reverseString = function(string) 
{
    let result = "";

    for(let x = (string.length-1); x >= 0; x--)
    {
        result += string[x];
    }
    
    return result;
};

// Do not edit below this line
module.exports = reverseString;
