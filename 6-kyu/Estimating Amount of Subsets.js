function estSubsets(arr) {
    let s = new Set(arr);
    return Math.pow(2, s.size)-1;
}
