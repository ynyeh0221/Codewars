function gcdi(a, b) {
    // your code
    a = Math.abs(a);
    b = Math.abs(b);
    if (!b)
        return a;
    return gcdi(b, a % b);
}
function lcmu(a, b) {
    // your code
    a = Math.abs(a);
    b = Math.abs(b);
    return a * b / gcdi(a, b);
}
function som(a, b) {
    // your code
    return a + b;
}
function maxi(a, b) {
    // your code
    return Math.max(a, b);
}
function mini(a, b) {
    // your code
    return Math.min(a, b);
}
function operArray(fct, arr, init) {
    // your code
    let res = [];
    for (let i = 0; i < arr.length; i++)
    {
      res.push(fct(init, arr[i]));
      init = res[i];
    }
    return res;
}
