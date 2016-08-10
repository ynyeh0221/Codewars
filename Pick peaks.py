def pick_peaks(arr):
    #your code here
    pos = []
    peaks = []
    for i in xrange(1, len(arr)-1):
        if arr[i] > arr[i-1]:
            for j in xrange(i+1, len(arr)):
                if arr[j] > arr[i]:
                    break
                elif arr[j] < arr[i]:
                    pos += [i]
                    peaks += [arr[i]]
                    break
    return {'pos': pos, 'peaks': peaks}
