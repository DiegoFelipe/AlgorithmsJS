const sieveOfEratosthenes = num => {
    let primes = createArrayWithValue(num, true)
    primes = markArrFalse(primes, [0,1])

    for (var i = 2; i <= Math.sqrt(num); i++) {
        for (var j = 2; j * i <= num; j++) {
            primes[i * j] = false
        }
    }

    let result = removeFalseFromArray(primes)
    return result
}

const removeFalseFromArray = arr => {
    let result = []
    arr.forEach((el, index) => {
        if(el) result.push(index)
    })
    return result
}

const createArrayWithValue = (amount, val) => {
    var arr = []
    for(let i =0; i < amount; i++) {
        arr.push(val)
    }
    return arr
}

const markArrFalse = (arr, indexesToDelete) => {
    arr.forEach((val, ind) => {
       val = indexesToDelete.includes(ind) ? false : arr[ind]
        arr[ind] = val
    })
    return arr
}

sieveOfEratosthenes(5)
