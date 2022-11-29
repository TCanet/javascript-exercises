const removeFromArray = function() 
{
    let array = arguments[0];

    for(let n = 1; n < arguments.length; n++)
    {
        for(let x = 0; x < array.length; x++)
        {
            if(arguments[n] === array[x] )
            {
                array.splice(x,1);
            }
        }
    }

    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
