#A
import math

a = int(input())
b = int(input())

c = math.sqrt(a**2 + b**2)
print(c)
#B
n = int(input())

print("The next number for the number", n, "is", n + 1, end=".\n")
print("The previous number for the number", n, "is", n - 1, end=".")

#C
N = int(input())  
K = int(input())  

print(K // N) 

#D
N = int(input())  
K = int(input())  

print(K % N) 

#E
v = int(input())  
t = int(input())  

position = (v * t) % 109

print(position if position >= 0 else position + 109)



