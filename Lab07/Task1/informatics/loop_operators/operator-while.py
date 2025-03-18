#A
N = int(input())  
i = 1  

while i * i <= N:  
    print(i * i)  
    i += 1 

#B
N = int(input())  
d = 2  

while N % d != 0: 
    d += 1  

print(d)  

#C
N = int(input())  
x = 1  

while x <= N:  
    print(x, end=" ") 
    x *= 2  

#D
N = int(input())  
x = 1  

while x < N:  
    x *= 2  

if x == N:
    print("YES")
else:
    print("NO")

#E
N = int(input()) 
k = 0  
x = 1  

while x < N:  
    x *= 2 
    k += 1

print(k)

