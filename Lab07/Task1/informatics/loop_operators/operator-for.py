#A
a = int(input())
b = int(input())

for i in range(a, b + 1):
    if i % 2 == 0:
        print(i, end=" ")


#B
a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b + 1):
    if i % d == c:
        print(i, end=" ")

#C
import math

a = int(input())
b = int(input())

for i in range(math.ceil(math.sqrt(a)), math.floor(math.sqrt(b)) + 1):
    print(i * i, end=" ")

#D
x, d = input().split()
count = 0
for i in x:
    if i == d:
        count += 1
print(count)


#E
x = input()
sum_digits = 0
for i in x:
    sum_digits += int(i)
print(sum_digits)

#F
x = input()
reverse_x = ""
for i in x:
    reverse_x = i + reverse_x
print(int(reverse_x))

#G
x = int(input())

for i in range(2, x + 1):
    if x % i == 0:
        print(i)
        break

#H
x = int(input())

for i in range(1, x + 1):
    if x % i == 0:
        print(i, end=" ")

#I
x = int(input())
count = 0

for i in range(1, int(x ** 0.5) + 1):
    if x % i == 0:
        count += 1
        if i != x // i:  
            count += 1

print(count)

#J
total = 0

for _ in range(100):
    total += int(input())

print(total)

#K
N = int(input())  
total = 0  

for _ in range(N):  
    total += int(input())  #

print(total) 

#L
binary_number = input() 
decimal_number = 0 

for i in range(len(binary_number)):  
    decimal_number += int(binary_number[-(i+1)]) * (2 ** i) 

print(decimal_number)  

#M
N = int(input())  
zero_count = 0  

for _ in range(N): 
    if int(input()) == 0:  
        zero_count += 1

print(zero_count)  