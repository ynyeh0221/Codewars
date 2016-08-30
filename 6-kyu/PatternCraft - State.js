class SiegeState {
  constructor() {  
  }
  canMove() { return false; }
  damage() { return 20; }
}

class TankState {
  constructor() {  
  }
  canMove() { return true; }
  damage() { return 5; }
}

class Tank {
  constructor() {
    this.state = new TankState();
  }
  get canMove() {return this.state.canMove(); }
  get damage() {return this.state.damage(); }
}
