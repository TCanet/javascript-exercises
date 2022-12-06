const add = function(x, y) 
{
	return x + y;
};

const subtract = function(x,y) 
{
	return x - y;
};

const sum = function() 
{
  let result = 0;

  if(Array.isArray(arguments[0]) == false)
  {
    for(let x = 0; x < arguments.length; x++)
    {
      result += Number(arguments[x]);
    }
  }else
  {
    for(let x = 0; x < arguments[0].length; x++)
    {
      result += Number(arguments[0][x]);
    }
  }

  return result;
};

const multiply = function() 
{
  let result = 1;

  for(let x = 0; x < arguments[0].length; x++)
  {
    result *= Number(arguments[0][x]);
  }

  if(arguments.length == 0) result = 0;

  return result;
};

const power = function(x,y) 
{
	return Math.pow(x,y);
};

const factorial = function(x) 
{
  let result = 1;

  for(let n = 1; n <= x; n++)
  {
    result = result * n;
  } 

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
