let digit = {'0':1, '1':1, '2':1, '3':1, '4':1, '5':1, '6':1, '7':1, '8':1, '9':1};
let ignore = {':':1, ';':1, '\\':1, '!':1, '/':1, '*':1, '$':1, '?':1, ',':1};
function phone(strng, num) {
    let dic = {};
    let name = '', address = '', pnum = '';
    for (let i = 0; i < strng.length; i++)
    {
      if (strng[i] == '\n')
      {
        dic[pnum]['address'] = address.trim();
        name = '';
        address = '';
        pnum = '';
      }
      else if (strng[i] == '+')
      {
        i += 1;
        let start = i;
        for (; strng[i] == '-' || strng[i] in digit; i++);
        let temp = strng.substring(start, i);
        if (!(temp in dic))
          dic[temp] = {};
        else
          dic[temp] = 'error';
        pnum = temp;
        if (name != '')
          dic[pnum]['name'] = name;
        if (address != '')
          dic[pnum]['address'] = address;
        i -= 1;
      }
      else if (strng[i] == '<')
      {
        let start = i+1;
        i += 1;
        for (; strng[i] != '>'; i++);
        let temp = strng.substring(start, i)
        if (pnum != '')
          dic[pnum]['name'] = temp;
        name = temp;
      }
      else
      {
        if (strng[i] in ignore || (address == '' && strng[i] == ' ') || (address != '' && address[address.length-1] == ' ' && strng[i] == ' '))
          continue;
        address += strng[i] == '_' ? ' ' : strng[i];
      }
    }
    return num in dic ? dic[num] == 'error' ? "Error => Too many people: " + num : "Phone => " + num + ", Name => " + dic[num]['name'] + ", Address => " + dic[num]['address'] : "Error => Not found: " + num;
}
