import numpy as np

a = np.array([2,23,4], dtype=np.float) #default 64 bit, higher bit, more space, more accurate

b = np.array([ [1,2,3],[4,5,6] ]) #2 rows, 3 cols

c = np.zeros( (3,4) ) #3 rows, 4 cols

d = np.empty( (2,3) )

e = np.arange(10, 20) 

f = np.arange(10, 20,  2) 
 
g = np.arange(12).reshape((3,4)) 

h = np.linspace(1,10, 4).reshape((2,2)) 

i = np.array([1,5,7,18])

j = np.arange(4)

k = (i-j)**2

l = np.sin(k)

n = np.arange(6).reshape(2,3)
bn = b*n

nn = np.arange(6).reshape(3,2)
b_dot_nn = np.dot(b, nn)
b_dot_nn2 = b.dot(nn)

m = np.random.random((2,3))
#(np.min(m, axis=0)) # 0 is col, 1 is row #for this, operation on col
#(np.min(m, axis=1)) # 0 is col, 1 is row #for this, operation on row

o = np.arange(2,14).reshape((3,4))

#np.cumsum(o) (accumulate)
#np.diff(o) (cumulant)

np.nonzero(o)
##output:
##(array([0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2], dtype=int32), (row)
## array([0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3], dtype=int32)) (col)
##mean row and col

o.T 
## transpose

np.clip(o,5,9)
## The number which is greater than 9 will become 9
## The number wich is smaller than 5 will become 5

np.mean(o, axis = 0)
## mean of col 

############ Index ############
p = np.arange(3,15).reshape((3,4))
#p[2]
#p[1][2]
#p[1,2]
#p[2,:] all the numbers of row 2
#p[2,1:3]

r = p.flatten()
# matrix to array

#for item in p.flat:
#	print(item)


#============== Merge/stack Array ==============
s = np.array([1,1,1])
t = np.array([2,2,2])
u = np.vstack( (s,t) ) # vertical stack/merge
v = np.hstack( (s,t) ) # horizontal stack/merge

# v.shape output is (6,). it means 6 elements
# s.T -- transpose does NOT work for one row array

w = s[:, np.newaxis] 
ww = t[:, np.newaxis] 
# [[1],
#  [1],
#  [1]]
# also can be [np.newaxis,:]

x = np.concatenate((w,ww,ww,w), axis = 0) # vertical stack/merge
y = np.concatenate((w,ww,ww,w), axis = 1) # horizontal stack/merge
# merge for multi arrays (more than 3)

# yy = np.concatenate((s,t,t,s), axis = 1) 
# this won't work. out of bounds of dimension 1

print(y)





 
















