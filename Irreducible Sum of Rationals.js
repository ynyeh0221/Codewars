function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);   
}

function sumFracts(l) {
    // your code
    if (l.length === 0)
      return null;
    let N = [], D = [];
    for (let i = 0; i < l.length; i++)
    {
      N.push(l[i][0]);
      D.push(l[i][1]);
    }
    let FD = D[0], FN = 0, FGCD = 0;
    for (let i = 1; i < D.length; i ++)
      FD = lcm(FD, D[i]);
    for (let i = 0; i < l.length; i++)
      FN += FD * N[i] / D[i];
    FGCD = gcd(FN, FD);
    FN /= FGCD;
    FD /= FGCD;
    return FN % FD === 0 ? FN / FD : [FN, FD]
}
