import numpy as np
import pandas as pd

df1 = pd.DataFrame({'col1':[0,1], 'col_left':['a','b']})
df2 = pd.DataFrame({'col1':[0,2,2], 'col_left':[2,2,2]})

a = pd.merge(df1, df2, on = 'col1', how='outer', indicator = True)
b = pd.merge(df1, df2, on = 'col1', how='outer', indicator = 'indicator_name')

left1 = pd.DataFrame({'A': ['A0','A1','A2','A3'],
					 'B': ['B0','B1','B2','B3']},
					 index = ['k0','k1','k2','k3'])
						
right1 = pd.DataFrame({'A': ['C0','C1','C2','C3'],
					 'B': ['D0','D1','D2','D3']},
					 index = ['k0','k1','k2','k3'])

					 
c = pd.merge(left1,right1,left_index=True, right_index=True,how='outer')
d = pd.merge(left1,right1,left_index=True, right_index=True,how='inner')

boys = pd.DataFrame({'k':['k0','k1','k2'], 'age':[1,2,3]})
girls = pd.DataFrame({'k':['k0','k0','k3'], 'age':[4,5,6]})
e = pd.merge(boys, girls, on='k', suffixes=['_b','_g'], how='outer')
f = pd.merge(boys, girls, on='k', suffixes=['_b','_g'], how='inner')
print(f)


