def make_readable(seconds):
    hours = seconds / 3600
    seconds -= hours * 3600
    minutes = seconds / 60
    seconds -= minutes * 60
    return "%02d:%02d:%02d" % (hours, minutes, seconds)
