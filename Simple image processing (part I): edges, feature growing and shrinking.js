function deepCopy(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        var out = [], i = 0, len = obj.length;
        for ( ; i < len; i++ ) {
            out[i] = arguments.callee(obj[i]);
        }
        return out;
    }
    if (typeof obj === 'object') {
        var out = {}, i;
        for ( i in obj ) {
            out[i] = arguments.callee(obj[i]);
        }
        return out;
    }
    return obj;
}

function count(ar)
{
  for (let i = 0; i < ar.length; i++)
  {
    for (let j = 0; j < ar[0].length; j++)
    {
      let sum = 0;
      if (ar[i][j] == 1)
        continue;
      if (i-1 >= 0 && ar[i-1][j] == 1)
        sum += ar[i-1][j];
      if (i+1 < ar.length && ar[i+1][j] == 1)
        sum += ar[i+1][j];
      if (j-1 >= 0 && ar[i][j-1] == 1)
        sum += ar[i][j-1];
      if (j+1 < ar[0].length && ar[i][j+1] == 1)
        sum += ar[i][j+1];
      if (i+1 < ar.length && j+1 < ar[0].length && ar[i+1][j+1] == 1)
        sum += ar[i+1][j+1];
      if (i-1 >= 0 && j-1 < ar[0].length && ar[i-1][j-1] == 1)
        sum += ar[i-1][j-1];
      if (i+1 < ar.length && j-1 >= 0 && ar[i+1][j-1] == 1)
        sum += ar[i+1][j-1];
      if (i-1 >= 0 && j+1 < ar[0].length && ar[i-1][j+1] == 1)
        sum += ar[i-1][j+1];
      if (sum >= 1)
        ar[i][j] = '.';
    }
  }
}

function outerEdgesOf(matrix){
  // returns an array with the same dimensions as arr.
  // where the outer edges of the features of arr are highlighted (1)
  let ar = deepCopy(matrix);
  count(ar);
  for (let i = 0; i < ar.length; i++)
  {
    for (let j = 0; j < ar[0].length; j++)
    {
      if (ar[i][j] == 1)
        ar[i][j] = 0;
      else if (ar[i][j] == '.')
        ar[i][j] = 1;
    }
  }
  return ar;
}

function innerEdgesOf(matrix){
  // returns an array with the same dimensions as arr.
  // where the inner edges of the features of arr are highlighted (1)
  let ar = deepCopy(matrix);
  for (let i = 0; i < ar.length; i++)
  {
    for (let j = 0; j < ar[0].length; j++)
    {
      if (ar[i][j] == 0)
        ar[i][j] = 1;
      else
        ar[i][j] = 0;
    }
  }
  count(ar);
  for (let i = 0; i < ar.length; i++)
  {
    for (let j = 0; j < ar[0].length; j++)
    {
      if (ar[i][j] == 0)
        ar[i][j] = 0;
      else if (ar[i][j] == 1)
        ar[i][j] = 0;
      else if (ar[i][j] == '.')
        ar[i][j] = 1;
    }
  }
  return ar;
}

function grow(matrix){
  // returns an array with the same dimensions as arr.
  // where the the features have grown
  let ar = deepCopy(matrix);
  count(ar);
  for (let i = 0; i < ar.length; i++)
  {
    for (let j = 0; j < ar[0].length; j++)
    {
      if (ar[i][j] == '.')
        ar[i][j] = 1;
    }
  }
  return ar;
}

function shrink(matrix){
  // returns an array with the same dimensions as arr.
  // where the the features have shrunk
  let ar = deepCopy(matrix);
  for (let i = 0; i < ar.length; i++)
  {
    for (let j = 0; j < ar[0].length; j++)
    {
      if (ar[i][j] == 0)
        ar[i][j] = 1;
      else
        ar[i][j] = 0;
    }
  }
  count(ar);
  for (let i = 0; i < ar.length; i++)
  {
    for (let j = 0; j < ar[0].length; j++)
    {
      if (ar[i][j] == 0)
        ar[i][j] = 1;
      else if (ar[i][j] == 1)
        ar[i][j] = 0;
      else if (ar[i][j] == '.')
        ar[i][j] = 0;
    }
  }
  return ar;
}
