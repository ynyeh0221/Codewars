class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None
    
def insert_nth(head, index, data):
    if not head:
        return Node(data)
    dummy = Node(0)
    dummy.next = head
    p = dummy
    for i in xrange(index):
        p = p.next
    insert = Node(data)
    insert.next = p.next
    p.next = insert
    return dummy.next
