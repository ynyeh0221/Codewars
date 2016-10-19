function countPairsInt(diff, nMax) {
    let res = 0;
    let pre = [];
    for (let i = 1; i < nMax; i++)
    {
        let count = 0;
        for (let j = 1; j * j <= i; j++)
        {
            if (i % j === 0)
            {
                count ++;
                if (j * j != i)
                    count ++;
            }
        }
        pre.push(count);
    }
    for (let i = 0; i < pre.length-diff; i++)
    {
        if (pre[i] == pre[i+diff])
            res++;
    }
    return res;
}
