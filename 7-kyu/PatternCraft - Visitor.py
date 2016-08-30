class Marine:
    def __init__(self):
        self.health = 100
    def accept(self,visitor):
        self.health -= 21

class Marauder:
    def __init__(self):
        self.health = 125
    def accept(self,visitor):
        self.health -= 32

class TankBullet:
    def visit_light(self,unit):
        return
    def visit_armored(self,unit):
        return
