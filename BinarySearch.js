const binarySearch = (numArray, key) => {

	var middleIndex = getMiddleIndex(numArray)
	var middleElemen = numArray[middleIndex]

	if(middleElemen === key) return true

	else if (middleElemen < key && numArray.length > 1) {
			return binarySearch(numArray.splice(middleIndex, numArray.length), key)
	}

	else if (middleElemen > key && numArray.length > 1) {
		return binarySearch(numArray.splice(0, middleIndex), key)
	}
	else return false
}

const getMiddleIndex = arr => Math.floor(arr.length / 2)



binarySearch([2,4,6,7,9,11,56,78,99], 78)
