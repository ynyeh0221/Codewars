function solution(list){
 let start = 0, res = [];
 for (let i = 1; i < list.length; i++)
 {
   if (list[i] > list[i-1] + 1)
   {
     if (i - start < 3)
     {
       for (let j = start; j < i; j++)
         res.push(list[j].toString());
     }
     else
       res.push(list[start].toString() + '-' + (list[i-1]).toString());
     start = i;
   }
 }
 if (list.length - start < 3)
 {
   for (let j = start; j < list.length; j++)
     res.push(list[j].toString());
 }
 else
   res.push(list[start].toString() + '-' + (list[list.length-1]).toString());
 return res.join(',');
}
