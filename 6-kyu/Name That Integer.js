function detectInt() {
  let num = 1;
  while (true)
  {
    let check = 0;
    for (let i in arguments)
    {
      if (arguments[i](num))
        check ++;
    }
    if (check == arguments.length)
      return num;
    num ++;
  }
}
