import random
def number_generator():
    res = []
    res += sorted(random.sample(range(0, 49), 6))
    res += random.sample(range(0, 10), 1)
    return res

def check_for_winning_category(your_numbers, winning_numbers):
    nots = your_numbers[:len(your_numbers)-1]
    s = your_numbers[-1]
    wnots = set(winning_numbers[:len(your_numbers)-1])
    ws = winning_numbers[-1]
    matches = 0
    for i in nots:
        if i in wnots:
            matches += 1
    if matches <= 1 or (matches == 2 and ws != s):
        return -1
    return (7 - matches) * 2 -1 if ws == s else (7 - matches) * 2
