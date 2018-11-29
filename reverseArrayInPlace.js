const reverseArrayInPlace = arr => {

    const arrLength = arr.length
    for (let i = 0; i < arr.length / 2; i++) {
        var temp = arr[i]
        let indexToSwitch = arrLength - 1 - i
        arr[i] = arr[indexToSwitch]
        arr[indexToSwitch] = temp
    }
    return arr
}

reverseArrayInPlace(['diego','felipe'])
