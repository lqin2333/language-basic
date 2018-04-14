import pandas as pd
import numpy as np
s = pd.Series([1,2,3,np.nan,4,1])


dates_index = pd.date_range('20160101', periods = 6)

df1 = pd.DataFrame(np.random.randn(6,4), index = dates_index, columns=['a','b','c','d'])

df2 = pd.DataFrame(np.arange(12).reshape(3,4))

df3 = pd.DataFrame({'A':1.,
					'B':pd.Timestamp('20130102'),
					'C':pd.Series(1, index = list(range(4)),dtype='float32'),
					'D':np.array([3]*4, dtype='int32'),
					'E':pd.Categorical(['test','train','test','train']),
					'F':'foo'
					})

df3.dtypes
df3.index #row labels
df3.columns #col labels
data_description = df3.describe()
a = df3.sort_index(axis=1, ascending=False) #operations based on col name, for the row
b = df3.sort_index(axis=0, ascending=False) #operations based on row name, for the col
c = df3.sort_values(by='E')

print(c)
