import numpy as np
import pandas as pd

dates_index = pd.date_range('20130101',periods = 6)
df = pd.DataFrame(np.arange(24).reshape((6,4)), 
					index = dates_index, 
					columns=['A','B','C','D'])


#select by label: loc
a = df.loc['20130102']
b = df.loc[:,['A','B']]
c = df.loc['20130102',['A','B']]

#select by position: iloc
d = df.iloc[3:5,1:3]
e = df.iloc[[1,3,5],1:3]

# mixed selection: ix
f = df.ix[:3,['A','C']] #using number for rows, labels for cols

# boolean indexing
g = df[df.A > 8]
gg = df[df.A > 8].iloc[:1,1:3]

df.loc['20130101','B'] = 222
df.iloc[2,2] = 111
df.ix[3,'C'] = 333
#df[df.A > 10] = 0
#df.A[df.A > 10] = 0
df['F'] = 666
df.loc['20130103','F'] = 777
h = pd.Series([1,2,3,4,5,6], index=dates_index)
df['E'] = h
df.iloc[0,1] = np.nan
df.iloc[1,2] = np.nan
print(df)
print('================')
i = df.dropna(axis=1, how='any') #how={'any','all'} A B C D F E
j = df.dropna(axis=0, how='any') #how={'any','all'} 

k = df.fillna(value=0)
l = np.any(df.isnull()) == True # check data frame has NaN or not

print(l)


data = pd.read_csv('file.csv') #read file
data.to_csv #save file







