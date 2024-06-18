import pandas

tabla = pandas.read_csv("test.csv")

print(tabla.head())

tabla = tabla.drop(columns=["cantidad"])
tabla = tabla.dropna()

tabla.to_csv("nueva_tabla.csv", index=None)
