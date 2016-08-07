function tankvol(h, d, vt) {
    // your code
    let r = d / 2;
    if (h < r)
    {
      let theta = Math.acos((r-h) / r);
      let width = 2 * d * Math.sin(theta);
      return Math.floor(vt / 2 * (Math.PI * r * r * 2 * theta / Math.PI - width * (r - h) / 2) / (Math.PI * r * r));
    }
    else if (h == r)
      return Math.floor(vt / 2);
    else
    {
      h = d - h;
      let theta = Math.acos((r-h) / r);
      let width = 2 * d * Math.sin(theta);
      return Math.floor(vt - vt / 2 * (Math.PI * r * r * 2 * theta / Math.PI - width * (r - h) / 2) / (Math.PI * r * r));
    }
}
