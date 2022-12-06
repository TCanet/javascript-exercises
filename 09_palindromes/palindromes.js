const palindromes = function () 
{
    let result = false;
    let str = arguments[0];
    str.replace(/[ !@#%$.,?^*]/g, '');
    let reversed = str.split("").reverse().join("");
    if(reversed == str)
    {
        result = true;
    }

    return result;
};

// Do not edit below this line
module.exports = palindromes;
