import math
def bouncingBall(h, bounce, window):
    try:
        return 2 * int(math.log(window / float(h)) / math.log(bounce)) + 1 if h > window else -1
    except:
        return -1
