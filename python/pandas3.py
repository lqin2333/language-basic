import numpy as np
import pandas as pd

#concatenating
#empty values will be NaN
#using defalut join -- outer
#默认并集
df1 = pd.DataFrame(np.ones((3,4))*0, columns=['a','b','c','d'])
df2 = pd.DataFrame(np.ones((3,4))*1, columns=['a','b','c','d'])
df3 = pd.DataFrame(np.ones((3,4))*2, columns=['a','b','c','d'])

a = pd.concat([df1,df2,df3], axis = 0) #vertical 0
b = pd.concat([df1,df2,df3], axis = 0, ignore_index = True) #vertical 0
c = pd.concat([df1,df2,df3], axis = 1, ignore_index = True) #horizontal 0


#join
#when join='inner' in pd.concat
#交集
df4 = pd.DataFrame(np.ones((3,4))*0, index=[1,2,3], columns=['a','b','c','d'])
df5 = pd.DataFrame(np.ones((3,4))*1, index=[2,3,4], columns=['b','c','d','e'])

d = pd.concat([df4, df5], join='inner')

#join_axes
e = pd.concat([df4, df5], axis=1, join_axes=[df4.index]) #horizontal and us df4's index

#append 
#only 
f = df1.append(df2, ignore_index=True)
g = df1.append([df2,df3], ignore_index=True)

s1 = pd.Series([1,2,3,4], index=['a','b','c','d'])
h = df1.append(s1, ignore_index=True)

left = pd.DataFrame({ 'key': ['k0','k1','k2','k3'],
						'A': ['A0','A1','A2','A3'],
						'B': ['B0','B1','B2','B3']})
						
right = pd.DataFrame({ 'key':['k0','k1','k2','k3'],
						'A': ['C0','C1','C2','C3'],
						'B': ['D0','D1','D2','D3']})
i = pd.merge(left, right, on='key')

left2 = pd.DataFrame({ 'key1':['k0','k1','k2','k3'],
					   'key2':['k0','k1','k0','k1'],
						'A': ['A0','A1','A2','A3'],
						'B': ['B0','B1','B2','B3']})
						
right2 = pd.DataFrame({ 'key1':['k0','k1','k2','k3'],
						'key2':['k0','k0','k0','k0'],
						'A': ['C0','C1','C2','C3'],
						'B': ['D0','D1','D2','D3']})
#how=['inner','outer','left','right']						
j = pd.merge(left2, right2, on=['key1','key2'],how='inner')
k = pd.merge(left2, right2, on=['key1','key2'],how='outer')

print(left2)		
print(right2)		
print(j)
print(k)

















