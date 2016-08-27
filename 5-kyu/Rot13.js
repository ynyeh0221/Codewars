function rot13(message){
  let res = '';
  message.split('').forEach(
   function (c)
   {
    let i = c.toLowerCase().charCodeAt(0) - 96;
    if (i < 0 || i > 26)
      res += c;
    else
    {
      let temp = (i + 13) % 26, rep = temp === 0 ? 26 : temp, cl = String.fromCharCode(rep + 96);
      res += c.toUpperCase() == c ? cl.toUpperCase() : cl;
    }
  });
  return res;
}
