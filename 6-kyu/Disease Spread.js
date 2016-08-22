function epidemic(tm, n, s0, i0, b, a) {
    let S = [s0], I = [i0], R = [0], dt = tm / n;
    for (let k = 0; k <n-1; k++)
    {
      S[k+1] = S[k] - dt * b * S[k] * I[k];
      I[k+1] = I[k] + dt * (b * S[k] * I[k] - a * I[k]);
      R[k+1] = R[k] + dt * I[k] *a;
    }
    return Math.max.apply(null, I);
}
