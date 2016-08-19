def choose_move(game_state):
    """Chooses a move to play given a game state"""
    
    for i in xrange(len(game_state)):
        temp = 0
        for j in xrange(len(game_state)):
            if j != i:
                temp ^= game_state[j]
        if game_state[i] > temp:
            return (i, game_state[i] - temp)
