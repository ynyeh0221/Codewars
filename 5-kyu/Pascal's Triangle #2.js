function pascal(numRows) {
  if (numRows === 0)
        return [];
    else if (numRows == 1)
        return [[1]];
    else if (numRows == 2)
        return [[1],[1,1]];
    let res = [[1],[1,1]];
    for (let i = 3; i <= numRows; i++)
    {
        res.push([1]);
        for (let j = 1; j < res[res.length-2].length; j++)
            res[res.length-1].push(res[res.length-2][j-1] + res[res.length-2][j]);
        res[res.length-1].push(1);
    }
    return res;
}
