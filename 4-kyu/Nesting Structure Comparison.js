function check(arr1, arr2)
{
        if (arr1.length === 0 && arr2.length === 0)
          return true;
        for (let i = 0; i < arr1.length; i++)
        {
          if (!isArray(arr1[i]) && !isArray(arr2[i]))
          {
            if (i == arr1.length-1)
                return true;
            continue;
          }
          else if (isArray(arr1[i]) && isArray(arr2[i]))
          {
            if (arr1[i].length == arr2[i].length)
            {
              if (check(arr1[i], arr2[i]))
              {
                if (i == arr1.length-1)
                  return true;
                continue;
              }
              else
                return false;
            }
            else
              return false;
          }
          else
            return false;
          if (i == arr1.length-1)
            return true;
        }
}

Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.
    if (isArray(this) && isArray(other))
    {
      if (this.length == other.length)
      {
        if (check(this, other))
          return true;
        return false;
      }
    }
};
