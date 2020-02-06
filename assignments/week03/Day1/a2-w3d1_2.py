# Write a Python program to combine two dictionary adding values for common keys.
# d1 = {'a': 100, 'b': 200, 'c':300}
# d2 = {'a': 300, 'b': 200, 'd':400}
# Sample output: Counter({'a': 400, 'b': 400, 'd': 400, 'c': 300})

d1 = {'a': 100, 'b': 200, 'c': 300}
d2 = {'a': 300, 'b': 200, 'd': 400}

# print({x: ((d1.get(x) + d2.get(x)) if x in d1.keys() and d2.keys() else d1.get(x) if x in d1.keys() or d2.get(x) if
# x )})

# print({x: lambda x: (d1.get(x) + d2.get(x)) for x in d1.keys() for y in d2.keys() if x == y})

# print({k: (d1[k] + d2[k] if k in d2 else d1[k]) for k in d1})

# print({k: d1[k] + d2[k] for k in d1 if k in d2})

d_output = {k: (d1[k] + d2[k] if k in d2 else d1[k]) for k in d1}

for x in d2:
    if x not in d1:
        d_output[x] = d2[x]

print(d_output)
