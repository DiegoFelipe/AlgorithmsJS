const maxStockProfit = pricesArray => {
	var maxProfit = -1
	var buyPrice = 0
	var sellPrice = 0

	var changeBuyPrice = true

	pricesArray.forEach((val, index) => {
		if(changeBuyPrice) buyPrice = val
		sellPrice = pricesArray[index+1]

		if(sellPrice < buyPrice) {
			changeBuyPrice = true
		} else {
			var tempProfit = sellPrice - buyPrice
			if(tempProfit > maxProfit) maxProfit = tempProfit
			changeBuyPrice = false
		}
	})

	return maxProfit
}
