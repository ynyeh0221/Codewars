function duplicateElements(m, n) {
    return m.filter(function(e) {
      return n.some(a=>a===e);
    }).length > 0 ? true : false;
}
