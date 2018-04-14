import numpy as np

# split
a = np.arange(12).reshape((3,4))
b = np.split(a, 2, axis = 1)
c = np.array_split(a, 3, axis = 1)
d = np.vsplit(a, 3)
e = np.hsplit(a, 2)

f = np.arange(4)
g = f #=f
h = f #=f
i = g #=f, modifying f will chagne h, g and i
f[0] = 11

j = g.copy() # called deep copy, only copy the value(s). not the obj
g[2] = 222
print(g)
print(j)