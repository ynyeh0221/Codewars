def loop_size(node):
    p1 = node
    p2 = node.next
    while p1 != p2:
        p1 = p1.next
        p2 = p2.next.next
    res = 1
    p1 = p1.next
    while p1 != p2:
        p1 = p1.next
        res += 1
    return res
