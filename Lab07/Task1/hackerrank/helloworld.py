#Problem1
my_string = "Hello, World!"
print(my_string)

#Problem2
def check_weird(n):
    if n % 2 == 1:  
        print("Weird")
    elif 2 <= n <= 5:  
        print("Not Weird")
    elif 6 <= n <= 20:  
        print("Weird")
    else:  
        print("Not Weird")

n = int(input().strip())

check_weird(n)

#Problem3
a = int(input())
b = int(input())

print(a + b)
print(a - b)
print(a * b)

#Problem4
a = int(input())
b = int(input())

print(a // b)  
print(a / b)  

#Problem5
if __name__ == '__main__':
    n = int(input())
    for i in range(n):  
        print(i ** 2)  

#Problem6
def is_leap(year):
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

year = int(input())  
print(is_leap(year))  

#Problem7
if __name__ == '__main__':
    n = int(input())  
    print(*range(1, n+1), sep='')


#Problem8
if __name__ == '__main__':
    n = int(input()) 
    arr = list(map(int, input().split()))  

    max_score = max(arr)  
    runner_up = max(x for x in arr if x != max_score) 

    print(runner_up)  

#Problem9
if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())

    result = [[i, j, k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) if i + j + k != n]
    print(result)

#Problem10
if __name__ == '__main__':
    students = []
    
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
    
    scores = sorted(set(score for _, score in students))
    second_lowest_score = scores[1]

    result = sorted([name for name, score in students if score == second_lowest_score])
    
    for name in result:
        print(name)



