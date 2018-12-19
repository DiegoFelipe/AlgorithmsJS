const sieveOfEratosthenes = num => {
    let primes = createArray(num, true)
    primes = markArrFalse(primes, [0,1])

    console.log(primes)
}

const createArray = (num, val) => {
    var arr = []
    for(let i =0; i < num; i++) {
        arr.push(val)
    }
    return arr
}

const markArrFalse = (arr, indexesToDelete) => {
    arr.forEach((ind, val) => {
        console.log(ind, val)
        val = indexesToDelete.includes(ind) ? false : val})

    return arr
}

sieveOfEratosthenes(5)
