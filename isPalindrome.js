const isBackwordEqToForward = string =>  string.join('') === string.reverse().join('')

const removeInvalidCharacters = (string, validCharacters) => {
    resultArray = []

    string.filter(character => {
        if(validCharacters.indexOf(character) > -1) resultArray.push(character)
    })
    console.log(resultArray)

    return resultArray
}

const isPalindrome = string => {
    string = string.toLowerCase();

    const charactersArray = string.split('')
    const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')

    let lettersArr = removeInvalidCharacters(charactersArray, validCharacters)
    return isBackwordEqToForward(lettersArr)
}

console.log(isPalindrome('asdsa')) // true
console.log(isPalindrome("Madam I'm Adam")) // true
console.log(isPalindrome("22Madam I'm Adam22")) // true
console.log(isPalindrome('asdsa')) // true

console.log(isPalindrome('asds222a3rsrf4th')) // false
