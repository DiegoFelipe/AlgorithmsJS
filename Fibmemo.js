const fibmemo = (position, cache) => {

    if(cache[index]) return cache[index]

    if(position < 3 ) return 1

    cache = cache || []
    cache[position] = fibmemo(position -1, cache) + fibmemo(position -2, cache)

    return cache[index]
}


fibmemo(8)
