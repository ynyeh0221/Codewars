function playPass(s, n) {
    // your code
    s = s.split('');
    for (let i = 0; i < s.length; i++)
    {
      if (/[a-zA-Z]/.test(s[i]))
      {
        s[i] = s[i].charCodeAt() < 92 ? String.fromCharCode(65 + (s[i].charCodeAt() - 65 + n) % 26) : String.fromCharCode(92 + (s[i].charCodeAt() - 92 + n) % 26);
        if (i % 2 === 0)
          s[i] = s[i].toUpperCase();
        else
          s[i] = s[i].toLowerCase();
      }
      else if (/[0-9]/.test(s[i]))
      {
        s[i] = (9 - parseInt(s[i])).toString();
      }
    }
    return s.reverse().join('');
}
