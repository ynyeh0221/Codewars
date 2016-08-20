function travel(r, zipcode) {
    let dic = {};
    let number = {};
    r = r.split(',');
    for (let i = 0; i < r.length; i++)
    {
      for (let j = 0; j < r[i].length-7; j++)
      {
        let re = /[A-Z][A-Z]\s\d\d\d\d\d/;
        let temp = r[i].substr(j, 8);
        if (temp.match(re))
        {
          if (!(temp in dic))
          {
            dic[temp] = [];
            number[temp] = [];
          }
          let address = r[i].substring(0, j);
          for (let k = 0; k < address.length; k++)
          {
            if (address[k].match(/\d/))
              continue;
            else
            {
              number[temp].push(address.substring(0, k));
              dic[temp].push(address.substring(k+1).trim());
              break;
            }
          }
        }
      }
    }
    return zipcode in dic ? zipcode + ':' + dic[zipcode].join(',') + '/' + number[zipcode].join(',') : zipcode + ':/';
}
