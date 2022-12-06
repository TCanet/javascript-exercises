const add = function(x, y) 
{
	return x + y;
};

const subtract = function(x,y) 
{
	return x - y;
};

const sum = function(X,Y) 
{
  return x + y;
};

const multiply = function(x,y) 
{
  return x*y;
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
