def nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth):
    pricediff = startPriceNew - startPriceOld
    i = savings = 0
    if pricediff <= 0:
        return [0, -pricediff]
    while pricediff > savings:
        i += 1
        savings += savingperMonth
        lost_rate = percentLossByMonth / 100.0 + i // 2 * 0.005
        startPriceOld *= 1 - lost_rate
        startPriceNew *= 1 - lost_rate
        pricediff = startPriceNew - startPriceOld
    return [i, round(savings - pricediff, 0)]
