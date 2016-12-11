function myFunction() {
  var MyObject = {
    objProperty: "string",
    objMethod: function() {
      return MyObject.objProperty;
		}
  }
  
  return MyObject;
};
