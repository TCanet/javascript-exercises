const fibonacci = function(x) 
{
    let target = Number(x);

    let fibArray = [1,1];
    let result = 0;

    if(target > 2)
    {
        for(let index = 2; index < x; index++)
        {
            result = fibArray[index-1] + fibArray[index-2];
            fibArray.push(result);
        }
    }else if(target >= 0 && target <= 2)
    {
        result = fibArray[target-1];
    }else
    {
        result = "OOPS"
    }

    return result;

};

// Do not edit below this line
module.exports = fibonacci;
