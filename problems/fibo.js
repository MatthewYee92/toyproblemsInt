/*
A series of numbers in which each number is the sum of
the two proceeding numbers. 

Ex: 1,1,2,3,5,8
*/ 

const fib = (n) => {
  if(n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

