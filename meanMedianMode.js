const sumArray = (acumulator, total) => acumulator + total
const getMean = (arr) => (arr.reduce(sumArray)) / arr.length


const getMiddleIndexOfArray = arr =>  {
    if(arr.length % 2 !== 0) // odd
        return Math.floor((arr.length / 2))
    else {
        let mid1 = (arr.length/2)-1
        let mid2 = arr.length/2
        return Math.floor((mid1 + mid2) / 2)
    }
}

const getMedian = (arr) => {
    arr.sort((a,b) => a-b)
    let result = getMiddleIndexOfArray(arr)
    return arr[result]
}

const createHashTable = arrayToMap => {

    const hashObj = {}
    arrayToMap.map( word => {
        if(!hashObj[word]) hashObj[word] = 0
        hashObj[word]++
    })
    return hashObj;
}

const getMaxFrequency = arr => {
    var maxFrequency = 0
      var mode = []
      for (var num in arr) {
        if (arr[num] > maxFrequency) {
          mode = [ num ]
          maxFrequency = arr[num]
        }
        else if (arr[num] === maxFrequency) mode.push(num)
      }

      if (mode.length === Object.keys(arr).length) mode = []
      return mode
}

const getMode = (arr) => {

    let hashTable = createHashTable(arr)
    return getMaxFrequency(hashTable)


}

const meanMedianMode = arr => {

    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr)
    }

}

console.log(meanMedianMode([1,2,3,4]))
