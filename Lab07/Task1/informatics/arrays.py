#A
arr = list(map(int, input().split()))
print(*arr[::2])


#B
arr = list(map(int, input().split()))
print(*[x for x in arr if x % 2 == 0])

#C
arr = list(map(int, input().split()))
print(sum(1 for x in arr if x > 0))  

#D
arr = list(map(int, input().split()))
print(*[arr[i] for i in range(1, len(arr)) if arr[i] > arr[i - 1]])

#E
arr = list(map(int, input().split()))
for i in range(1, len(arr)):
    if arr[i] * arr[i - 1] > 0:  
        print(arr[i - 1], arr[i])
        break

#F
arr = list(map(int, input().split()))
print(sum(1 for i in range(1, len(arr) - 1) if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]))

#G
arr = list(map(int, input().split()))
max_val = max(arr)
print(max_val, arr.index(max_val))  
