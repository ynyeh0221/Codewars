function vowelShift(text, n) {
  if (text === null)
    return text;
  text = text.split('');
  let vowels = '', location = [];
  for (let i = 0; i < text.length; i++)
    if (/[aeiouAEIOU]/.test(text[i]))
    {
      vowels += text[i];
      location.push(i);
    }
  while (n < 0)
    n = vowels.length + n;
  n %= vowels.length;
  vowels = vowels.substring(vowels.length - n, vowels.length) + vowels.substring(0, vowels.length - n);
  for (let i = 0; i < location.length; i++)
    text[location[i]] = vowels[i];
  return text.join('');
}
