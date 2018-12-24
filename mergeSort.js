const mergeSort = arr => {

	if(arr.length < 2) return arr

	let firstHalf = getFirstHalf(arr)
	let secondHalf = getSecondHalf(arr)

	return merge(mergeSort(firstHalf), mergeSort(secondHalf))



}

const getSecondHalf = arr => arr.slice(getMiddleIndex(arr))
const getFirstHalf = arr => arr.slice(0, getMiddleIndex(arr))
const getMiddleIndex = arr => Math.floor(arr.length / 2)

const merge = (arr1, arr2) => {

	var result = []

	while(arr1.length && arr2.length) {
		let minElement
		minElment = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift()
		result.push(minElment)
	}

	result = arr1.length ? result.concat(arr1) : result.concat(arr2)
	return result
}

mergeSort([4,3,2,1])
