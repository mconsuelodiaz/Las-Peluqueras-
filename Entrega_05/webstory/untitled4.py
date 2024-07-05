import mpld3

import matplotlib.pyplot as plt


tallas = ['S mayor', 'S menor', 'M mayor', 'M menor', 'L mayor', 'L menor', 'XL mayor', 'XL menor'] #Años
medidas = [88, 57, 92, 61, 103, 65, 105, 68]  # Porcentajes para el grupo A en cada año


# Crear el gráfico de barras apiladas
plt.figure(figsize=(14, 5))
plt.bar(tallas, medidas)

posiciones_tallas = [0.1, 1, 2, 3, 4]

# Barras para cada grupo de personas
plt.bar('S mayor', 88, color='SteelBlue')
plt.bar('S menor', 57, color='LightSteelBlue')
plt.bar('M mayor', 92, color='SteelBlue')
plt.bar('M menor', 61, color='LightSteelBlue')
plt.bar('L mayor', 103, color='SteelBlue')
plt.bar('L menor', 65, color='LightSteelBlue')
plt.bar('XL mayor', 105,  color='SteelBlue')
plt.bar('XL menor', 68, color='LightSteelBlue')

# Personalizar el gráfico
plt.xlabel('Límites de anchura de cintura de cada talla de jeans', fontsize=22)
plt.ylabel('Medidas en centímetro', fontsize=22)
plt.title('Rango de anchura de cintura de los jeans que venden las tiendas de retail en Chile', fontsize=22)


# Mostrar el gráfico
plt.show()


mpld3.save_html(plt.gcf(), 'grafico.html')

