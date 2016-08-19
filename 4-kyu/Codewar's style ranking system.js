// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method
var User = class {
  constructor() {
    this.rank = -8;
    this.progress = 0;
    this.HIGHEST = 8;
  }
  rank()
  {
    return this.rank;
  }
  progress()
  {
    return this.progress;
  }
  incProgress(ranking)
  {
    if (ranking == 0 || ranking > this.HIGHEST || ranking < -this.HIGHEST)
      throw new RangeError("rank input out of range");
    if (this.rank == this.HIGHEST)
      return;
    var diff = (ranking > 0 && this.rank < 0) || (ranking < 0 && this.rank > 0) ? Math.abs(this.rank) + Math.abs(ranking) : ranking - this.rank;
    if (ranking > 0 && this.rank < 0) diff -= 1;
    if (ranking < 0 && this.rank > 0) diff = -diff;
    if (diff > 0)
      this.progress += (ranking == 1 && this.rank == -1) ? 10 : (10 * diff * diff);
    else
        this.progress += diff == 0 ? 3 : 1;
    this.rank += Math.floor(this.progress / 100);
    if (this.rank == 0) this.rank++;
    this.progress %= 100
    if (this.rank == this.HIGHEST)
      this.progress = 0;
  }
};
