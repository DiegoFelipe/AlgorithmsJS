const createHashTable = arrayToMap => {

    const hashObj = {}
    arrayToMap.map( word => {
        if(!hashObj[word]) hashObj[word] = 0
        hashObj[word]++
    })
    return hashObj;
}

const isNotePossible = (noteArray, hashMagazine) => {
    let result = true

    noteArray.map((note) => {
        if(hashMagazine[note]) {
            hashMagazine[note]--
            if(hashMagazine[note] < 0) result = false
        } else {
            result = false
        }
    })

    return result
}

const harmlessRansomNote = (noteText, magazineText) => {

    const noteArray = noteText.split(' ')
    const magazineArray = magazineText.split(' ')

    const magazineHashTable = createHashTable(magazineArray)
    return isNotePossible(noteArray, magazineHashTable)
}

harmlessRansomNote('','this is all the text that is inside the text of magazins') // FASE
harmlessRansomNote('this','this is all the text that is inside the text of magazins') // TRUE
