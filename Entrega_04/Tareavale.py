import pandas as pd
import matplotlib.pyplot as plt

# Datos para el gráfico
etiquetas = ['Sí', 'No', 'A veces']
porcentajes = [42.3, 35.6, 22.1]

# Crear el gráfico de barras
plt.bar(etiquetas, porcentajes, color='pink')

# Personalizar el gráfico
plt.title('¿Acostumbras a pedir por delivery?')
plt.xlabel('Respuesta')
plt.ylabel('Porcentaje')

# Mostrar el gráfico
plt.show()

















