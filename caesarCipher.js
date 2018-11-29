var validCharacters = 'abcdefghijklmnopqrstuvwyxz'.split('')
var validCharsLength = validCharacters.length

const removeInvalidCharacters = (str, validCharacters) => {
    resultArray = []

    str.filter(character => {
        if(validCharacters.indexOf(character) > -1) resultArray.push(character)
    })

    return resultArray
}

const getCharIndexOnArray = (char, arrayToFind)  => arrayToFind.indexOf(char)
const getIndexValidCharacters = str => getCharIndexOnArray(str, validCharacters)

const getNextPosition = (currentPosition, incrementor) => {

    let possibleNextPos = currentPosition + incrementor
    let nextPos = possibleNextPos >= validCharacters.length ? 1 : possibleNextPos;

    return nextPos
}

const getCipheredChar = position => validCharacters[position]

const caesarCipher = (str, num) => {

    num = num % validCharsLength
    str = str.split('')
    /* 3 steps:
    1 - Remove invalid characters
    2 - Get current position in the valid characters array
    3 - Get Next Valid Position
    4 - Get the character at the next valid position (according to num)
    5 - Join the result and return the result
    */
    str = removeInvalidCharacters(str, validCharacters).map(getIndexValidCharacters).map(index => getNextPosition(index, num)).map(getCipheredChar).join('')
    return str

}

console.log(caesarCipher('zoo keeper', 2)) //
