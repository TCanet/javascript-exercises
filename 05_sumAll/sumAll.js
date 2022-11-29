const sumAll = function(x, y) 
{
    let result = 0, larger = 0, smaller = 0;

    if(x >= y)
    {
        larger = x;
        y = smaller;
    }else
    {
        smaller = x;
        larger = y;
    }

    if(smaller >= 0 && larger >= 0 && typeof(smaller) == "number" && typeof(larger) == "number" )
    {
        for(let n = smaller; n <= larger; n++)
        {
            result += n;
        }
    }else
    {
        result = "ERROR"
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
