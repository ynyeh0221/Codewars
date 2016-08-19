NetworkClient.id = 0;

function NetworkClient (sendFunction, callback) {
  this.sendFunction = sendFunction;
  this.callback = callback;
  NetworkClient.id++;
  this.id = NetworkClient.id;
  NetworkClient.cache = [];
}

NetworkClient.prototype.send = function (data) {
    // Could wrap data with extra information to send
    var goIt = false;
    for (let i = 0; i < NetworkClient.cache.length; i += 1)
    {
        if (NetworkClient.cache[i].key === data)
          goIt = true;
    }
    if (!goIt)
    {
      NetworkClient.cache.push({key:data, id:this.id, send:true});
      this.sendFunction(data);
    }
};

NetworkClient.prototype.recv = function (data) {
    // Could unpack data and validate
      var first = true;
      var go = false;
      for(let i = 0; i < NetworkClient.cache.length; i += 1)
      {
        var c = NetworkClient.cache[i];
        if (c.id !== this.id)
        {
          if (c.send)
          {
            if (c.key === data && first)
              go = true;
            first = false;
          }
          if (go && c.send)
          {
            this.callback(c.key);    
            c.send = false;
          }
        }
      }   
};
