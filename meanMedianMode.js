const sumArray = (acumulator, total) => acumulator + total

const getMean = (arr) => (arr.reduce(sumArray)) / arr.length


const sortNumericArray = item =>  new Uint32Array(item)

const getMiddleIndexOfArray = arr => Math.ceil((arr.length / 2))

const getMedian = (arr) => {
    let result = arr.map(sortNumericArray).sort().reduce(getMiddleIndexOfArray)
    return arr[result]
}

const getMode = (arr) => {

}

const meanMedianMode = arr => {

    return {
        mean: getMean(arr),
        median: getMedian(arr)

    }

}

console.log(meanMedianMode([1,2,3,4]))
