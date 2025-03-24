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

    #Write a program to ask for a name until the user enters END. 
    #Print the name each time. When you are done, print "I am done."
def print_names():
    completed = False

    while(not completed):
        name = input("Enter a name: ")
        if name != 'END':
            print(name)
        else:
            completed = True
            print("I am done")

#results = get_positive_nums()
#print(results)
print_names()