function undoRedo(object) {
  let stacku = [], stackr = [];
  return {
    set: function(key, value) {
      if (stackr.length > 0)
        stackr = [];
      if (key in object)
      {
        stacku.push({key: key, val: object[key], op: 'c'});
        object[key] = value;
      }
      else
      {
        stacku.push({key: key, val: value, op: 'a'});
        object[key] = value;
      }
      return object;
    },
    get: function(key) {
      return object[key];
    },
    del: function(key) {
      stacku.push({key: key, val: object[key], op: 'd'});
      delete object[key];
    },
    undo: function() {
      if (stacku.length === 0)
        throw new UserException("Invalid");
      let v = stacku.pop();
      if (v.op == 'a')
      {
        delete object[v.key];
        stackr.push({key: v.key, val: v.val, op: 'd'});
      }
      else if (v.op == 'c')
      {
        let temp = object[v.key];
        object[v.key] = v.val;
        stackr.push({key: v.key, val: temp, op: 'c'});
      }
      else if (v.op == 'd')
      {
        object[v.key] = v.val;
        stackr.push({key: v.key, val: v.val, op: 'a'});
      }
      else
        throw new UserException("Invalid");
    },
    redo: function() {
      if (stackr.length === 0)
        throw new UserException("Invalid");
      let v = stackr.pop();
      if (v.op == 'a')
      {
        delete object[v.key];
        stacku.push({key: v.key, val: v.val, op: 'd'});
      }
      else if (v.op == 'c')
      {
        let temp = object[v.key];
        object[v.key] = v.val;
        stacku.push({key: v.key, val: temp, op: 'c'});
      }
      else if (v.op == 'd')
      {
        object[v.key] = v.val;
        stacku.push({key: v.key, val: v.val, op: 'a'});
      }
      else
        throw new UserException("Invalid");
    }
  };
}
