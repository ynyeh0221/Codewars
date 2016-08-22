class Node(object):
    def __init__(self, data=None):
        self.data = data
        self.next = None
    
class Context(object):
    def __init__(self, first, second):
        self.first = first
        self.second = second
    
def alternating_split(head):
    if not head or not head.next:
        raise ValueError('Error')
    f = Node(0)
    ff = f
    s = Node(0)
    ss = s
    ind = 0
    while head:
        temp = head
        head = head.next
        if ind % 2 == 0:
            ff.next = temp
            ff = ff.next
        else:
            ss.next = temp
            ss = ss.next
        temp.next = None
        ind += 1
    return Context(f.next, s.next)
