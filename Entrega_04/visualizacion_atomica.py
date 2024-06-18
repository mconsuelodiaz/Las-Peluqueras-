import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("Libro_6.csv")

fig, ax = plt.subplots(figsize=(12, 8))

heavy_users = df.iloc[0:3]
lugares_compras = df.iloc[3:6]
categorias_compras = df.iloc[6:9]

ax.barh(heavy_users['Categoría'], heavy_users['Proporción'], color='skyblue', label='Heavy Users')
ax.barh(lugares_compras['Categoría'], lugares_compras['Proporción'], color='lightgreen', label='Lugares de Compra')
ax.barh(categorias_compras['Categoría'], categorias_compras['Proporción'], color='salmon', label='Categorías de Compra')

ax.set_xlabel('Porcentaje')
ax.set_title('Radiografía del E-commerce en Chile')
ax.legend()

plt.tight_layout()
plt.show()