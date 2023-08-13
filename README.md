# A* algorithm


implementation of labyrinth using A* algorithm and javascript 

More information in file .pdf


# Proyecto Laberinto

Armando Fabian Gonzalez Valentin  
Beatriz Edolla Martinez  
802-A

## Descripción
Este es un emocionante proyecto de laberinto implementado en JavaScript. El laberinto consta de una matriz que representa el escenario en el que se moverá un personaje. El objetivo es encontrar el camino desde una posición de inicio hasta una posición de destino utilizando el algoritmo A*.

## Matrices para el escenario
Aquí se definen tres matrices diferentes que representan diferentes laberintos:

- `laberinto`
- `laberinto2`
- `laberinto3`

## Funciones Principales
- `creaArray2D(f, c)`: Crea un array 2D con dimensiones `f` filas y `c` columnas.
- `heuristica(a, b)`: Calcula la heurística entre dos puntos `a` y `b`.
- `Casilla(x, y, s)`: Define la clase Casilla que representa una posición en el laberinto.
- `Casilla.addVecinos()`: Agrega los vecinos de la casilla.
- `Casilla.dibuja()`: Dibuja la casilla en el canvas.
- `Casilla.dibujaOS()`: Dibuja la casilla en el conjunto de nodos abiertos (OpenSet).
- `Casilla.dibujaCS()`: Dibuja la casilla en el conjunto de nodos cerrados (ClosedSet).
- `Casilla.dibujaCamino()`: Dibuja la casilla en el camino encontrado.

## Inicialización
La función `inicializa()` configura el escenario, define el tamaño de las casillas, crea la matriz de casillas, añade los vecinos y crea los puntos de inicio y destino.

## Algoritmo A*
El algoritmo A* se ejecuta en el bucle principal `principal()`. Encuentra el camino desde el punto de inicio hasta el destino, marcando las casillas visitadas en el conjunto de nodos abiertos (OpenSet) y nodos cerrados (ClosedSet).

## Uso
Simplemente carga el archivo en tu navegador y podrás ver el laberinto y la ruta calculada utilizando el algoritmo A*.

## Créditos
Este proyecto fue desarrollado por Armando Fabian Gonzalez Valentin y Beatriz Edolla Martinez.
