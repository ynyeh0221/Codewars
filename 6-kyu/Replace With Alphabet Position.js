function alphabetPosition(text) {
  text = text.toLowerCase();
  var res = ""
  for (var i = 0; i < text.length; i++)
  {
    if (text[i].charCodeAt(0) >= 97 && text[i].charCodeAt(0) <= 97+26-1)
    {
      res += (text[i].charCodeAt(0) - 'a'.charCodeAt(0) + 1).toString();
      res += " ";
    }
  }
  return res.trim();
}
