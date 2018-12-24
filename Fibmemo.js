const fibmemo = (position, cache) => {

    cache = cache || []
    if(cache[position]) return cache[position]
    else {
        if(position < 3 ) return 1
        else {
            cache[position] = fibmemo(position -1, cache) + fibmemo(position -2, cache)
        }
    }
    return cache[position]
}


fibmemo(50)
