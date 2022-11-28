const repeatString = function(string, num) 
{
    let result = "";

    if(num >= 0)
    {
        for(let x = 0; x < num; x++)
        {   
            result += string;
        }
    } else
    {
        result = "ERROR";
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
