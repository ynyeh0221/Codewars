class Fly():
    def move(self,unit):
        unit.position += 10
        
class Walk():
    def move(self,unit):
        unit.position += 1

class Viking():
    def __init__(self):
        self.position = 0
        self.move_behavior = Walk()
  
    def move(self):
        return self.move_behavior.move(self)
