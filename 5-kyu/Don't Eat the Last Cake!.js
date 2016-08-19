// Constructor (your Captain Obivious)
function Player(){}
// Decide who move first - player or opponent (true if player)
Player.prototype.firstmove = function(cakes){
  // I wish to move first
  if (cakes > 2 && cakes % 4 != 2)
    return true;
  return false;
}
// Decide your next move
Player.prototype.move = function(cakes, last){
  // I'm not greedy
  return cakes % 4 < 3 ? 3 : 1;
}
