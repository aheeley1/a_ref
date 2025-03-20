def get_positive_nums():
    results = []
    complete = False

    while (not complete):
        n = int(input("Enter a positive integer to add it to the list. Enter a negative integer to quit: "))
        if n >= 0:
            results.append(n)
        else:
            complete = True
            
    return results

results = get_positive_nums()
print(results)