function processImage(imageData, height, width, weights){
  let r = [[]], g = [[]], b = [[]];
  for (let i = 0; i < imageData.length; i += 3) // Save R, G, B dat into matrix r, g, b, respectively
  {
    r[r.length-1].push(imageData[i]); g[g.length-1].push(imageData[i+1]); b[b.length-1].push(imageData[i+2]);
    if (r[r.length-1].length == width && i + 3 < imageData.length)
    {
      r.push([]); g.push([]); b.push([]);
    }
  }
  let ww = Math.floor(weights.length / 2);
  let new_width = 2 * ww + width, new_height = 2 * ww + height;
  let newr = [], newg = [], newb = [], istart = Math.floor(weights.length / 2), jstart = Math.floor(weights[0].length / 2);
  for (let i = 0; i < new_height; i++) // Create new matrix newr, newg, newb by extended the edges of the original matrix r, g, b to deal with the edge and corner
  {
    newr.push([]); newg.push([]); newb.push([]);
    for (let j = 0; j < new_width; j++)
    {
      newr[i].push(0); newg[i].push(0); newb[i].push(0);
    }
  }
  for (let i = istart; i < istart + height; i++)
  {
    for (let j = jstart; j < jstart + width; j++)
    {
      newr[i][j] = r[i - istart][j - jstart];
      newg[i][j] = g[i - istart][j - jstart];
      newb[i][j] = b[i - istart][j - jstart];
    }
  }
  for (let i = 0; i < istart; i++)
  {
    newr[i] = newr[istart].slice();
    newg[i] = newg[istart].slice();
    newb[i] = newb[istart].slice();
  }
  for (let i = istart + height; i < new_height; i++)
  {
    newr[i] = newr[istart+height-1].slice();
    newg[i] = newg[istart+height-1].slice();
    newb[i] = newb[istart+height-1].slice();
  }
  for (let j = 0; j < jstart; j++)
  {
    for (let i = 0; i < new_height; i++)
    {
      newr[i][j] = newr[i][jstart];
      newg[i][j] = newg[i][jstart];
      newb[i][j] = newb[i][jstart];
    }
  }
  for (let j = istart + width; j < new_width; j++)
  {
    for (let i = 0; i < new_height; i++)
    {
      newr[i][j] = newr[i][jstart+width-1];
      newg[i][j] = newg[i][jstart+width-1];
      newb[i][j] = newb[i][jstart+width-1];
    }
  }
  let afterr = [], afterg = [], afterb = [];
  for (let i = 0; i < height; i++)
  {
    afterr.push([]); afterg.push([]); afterb.push([]);
    for (let j = 0; j < width; j++)
    {
      afterr[i].push(0); afterg[i].push(0); afterb[i].push(0);
    }
  }
  for (let i = istart; i < istart + height; i++)
  {
    for (let j = jstart; j < jstart + width; j++)
    {
      for (let k = 0; k < weights.length; k++)
      {
        for (let l = 0; l < weights.length; l++) // weighting
        {
          afterr[i-istart][j-jstart] += newr[i-ww+k][j-ww+l] * weights[k][l];
          afterb[i-istart][j-jstart] += newb[i-ww+k][j-ww+l] * weights[k][l];
          afterg[i-istart][j-jstart] += newg[i-ww+k][j-ww+l] * weights[k][l];
        }
      }
      afterr[i-istart][j-jstart] = Math.round(afterr[i-istart][j-jstart]); // important
      afterg[i-istart][j-jstart] = Math.round(afterg[i-istart][j-jstart]);
      afterb[i-istart][j-jstart] = Math.round(afterb[i-istart][j-jstart]);
      afterr[i-istart][j-jstart] = afterr[i-istart][j-jstart] < 0 ? 0 : afterr[i-istart][j-jstart] > 255 ? 255 : afterr[i-istart][j-jstart]; // important
      afterg[i-istart][j-jstart] = afterg[i-istart][j-jstart] < 0 ? 0 : afterg[i-istart][j-jstart] > 255 ? 255 : afterg[i-istart][j-jstart];
      afterb[i-istart][j-jstart] = afterb[i-istart][j-jstart] < 0 ? 0 : afterb[i-istart][j-jstart] > 255 ? 255 : afterb[i-istart][j-jstart];
    }
  }
  let res = []; // convert afterr, afterg, afterb into the output form and return
  for (let i = 0; i < height; i++)
  {
    for (let j = 0; j < width; j++)
    {
      res.push(afterr[i][j]);
      res.push(afterg[i][j]);
      res.push(afterb[i][j]);
    }
  }
  return res;
}
