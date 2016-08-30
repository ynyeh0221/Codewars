class TankState():
    def __init__(self):
        self.canMove = True
        self.damage = 5
        
class SiegeState():
    def __init__(self):
        self.canMove = False
        self.damage = 20
        
class Tank():
    def __init__(self):
        self.state = TankState()
    def can_move(self):
        return self.state.canMove
    def damage(self):
        return self.state.damage
