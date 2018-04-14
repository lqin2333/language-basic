import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

#Series
data = pd.Series(np.random.randn(1000), index=np.arange(1000))
data1 = data.cumsum()

#data1.plot()

#DataFrame
c = pd.DataFrame(np.random.randn(1000,4), index=np.arange(1000), columns = list('ABCD'))
d = c.cumsum()

#d.plot()
#plt.show()
#plot methods: 'bar','hist','box','kde','area','scatter','hexbin','pie'
draw_1 = d.plot.scatter(x='A',y='B', color='DarkBlue',label='Class 1')
darw_2 = d.plot.scatter(x='A',y='C', color='DarkRed',label='Class 2', ax=draw_1)
plt.show()

