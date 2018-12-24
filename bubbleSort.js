const bubbleSort = arr => {
	let swap
	
	do {
		swap = false
		arr.map((val, index) => {
			if(index === 0) {
				index++
				val = arr[index]
			}
			if(arr[index-1] > val) {
				arr[index] = arr[index-1]
				arr[index-1] = val
				swap = true
			}
		})
	} while(swap)

	return arr

}

bubbleSort([5,4,3,2,1,8])
