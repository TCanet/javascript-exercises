const getTheTitles = function(arr) 
{
    let titleArray = [];

    for(let x = 0; x < arr.length; x++)
    {
        titleArray.push(arr[x].title);
    }

    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
