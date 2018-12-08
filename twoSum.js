
const twoSum = (numArray, sum) => {

	var pairs = []
	var hashTable = []
	numArray.map( num => {
			let counterPart = sum - num
			if(hashTable.indexOf(counterPart)) pairs.push([counterPart, num])
			hashTable.push(num)
	})

	return pairs
}

console.log(twoSum([1,2,3,4,7,6,9], 7))
