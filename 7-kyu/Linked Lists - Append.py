class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None

def append(listA, listB):
    if not listA and not listB:
        return None
    if listA and not listB:
        return listA
    if listB and not listA:
        return listB
    head = listA
    while listA.next:
        listA = listA.next
    listA.next = listB
    return head
