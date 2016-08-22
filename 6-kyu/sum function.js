function sum(x) {
 if (Object.keys(arguments).length > 1)
 {
   let sum = 0;
   for (let i in arguments)
     sum += arguments[i];
   return sum;
 }
 else
 {
   function f(y) {
     return x + y;
   }
   return f;
 }
}
