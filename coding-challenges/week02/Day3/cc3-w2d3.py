# as no range was mention in the given problem statement, i have assumed the range from 1 to 999

print(*(i for i in range(1, 1000) if i % 14 == 0))
