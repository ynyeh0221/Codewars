function powerSumDigTerm(n) {
    let res = [];
    for (let i = 2; i <= 100; i++)
    {
        for (let j = 2; j <= 45; j++)
        {
            let s = Math.pow(i, j).toString();
            let sum = 0;
            for (let k = 0; k < s.length; k++)
                sum += parseInt(s[k], 10);
            if (sum == i)
                res.push(parseInt(s,10));
        }
    }
    res = res.sort((a,b)=>a-b);
    return res[n-1];
}
