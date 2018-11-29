const reverseOneWord = word => {

    const reversedWord = []

    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord.push(word[i])
    }

    return reversedWord.join('')
}

const reverseWords = str => {

    str = str.split(' ')
    return str.map(reverseOneWord).join(' ')
}

console.log(reverseWords('this is a sample teste'))
