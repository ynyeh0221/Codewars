function average(scores) {
    return Math.round(scores.reduce(function(a, b) { return a + b; }, 0)/scores.length);
}
