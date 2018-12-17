const fibonacci = position => {
    if(position <= 2) return 1

    return fibonacci(position - 1) + fibonacci(position -2)
}

fibonacci(8)
