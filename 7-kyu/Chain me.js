function chain(input, fs) {
    let res = input;
    for (let i = 0; i < fs.length; i++)
        res = fs[i](res);
    return res;
}
