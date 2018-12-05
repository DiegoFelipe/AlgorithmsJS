const sumArray = (acumulator, total) => acumulator + total
const getMean = (arr) => (arr.reduce(sumArray)) / arr.length


const getMiddleIndexOfArray = arr =>  {
    if(arr.length % 2 !== 0) // od
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

}

const getMode = (arr) => {

    let hashTable = createHashTable(arr)
    console.log(getMaxFrequency(hashTable))

}

const meanMedianMode = arr => {

    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr)
    }

}

console.log(meanMedianMode([1,2,3,4]))
