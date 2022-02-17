# 📚 **PALADIA** 📚
✨✨*¡Sabiduría al alcance de un click!* ✨✨	

## Introducción 🔬
El proyecto "**PALADIA**", es un market place para realizar la compra y venta de libros. Nuestros usuarios podrán ver las distintas categorías de géneros que disponemos y los destacados del momento puntuados por nuestros clientes.
El "*seller*" tiene las herramientas para la gestión (CRUD) de la página y publicaicón de los libros.


## Objetivos de la práctica🛫

1.- Aplicar testing. [x]

2.- Introducirnos a las bases de Flask. [x]

4.- Practicar el proceso de contrucción de elementos y su vinculación. [x]

5.- Hacer la migración a postgreSQL. [x]


## Estructura 🎡
Nuestra Home Landing estará dividida en:

 - Navbar: en la parte izquierda, tendremos un 📊 "*icon bar*" 📊 dónde en un futuro nos gustaría incluir un apartado **login/singn** up para el usuario. 🙆‍♀️ En el caso de la parte derecha tendremos 🛒"*icon cart*" 🛒, en un futuro nos gustaría poder darle esa funcionalidad real de carrito de compra y tener así una experiencia completa para el usuario. 🛍️

 - 🔍Search Container🔍: nuestro usuario, a futuro, podrá buscar el libro que necesite el cual será filtrado en nuestra base de datos por el componente filter. 🔖

- Category Container: encontraremos las categorías que disponemos en la aplicación 📇, para una búsqueda más agilizada del género de libro 📖 que deseemos buscar, además de esto tendremos una pequeña transición 🌔 con sombra en caso de pasar el mouse por encima de las cards. 🐭

- 🍾Recommended Container🏆: en este apartado tendremos los libros más 🌟top del momento🌟, puntuados por nuestros clientes y recomendados al resto de usuarios, en este caso una vez pasemos el mouse 🐭🧀 tendremos una pequeña animación que acercará el contenedor escogido y le cambiará el color para resaltarlo del resto 📌, una vez quitemos el mouse volverá a su estado original. En recomendados,  encontraremos la imagen del libro destacado🌟, su título, el género, el precio a pagar 💲💲💲 (si deseamos adquirirlo), además de la estrella de puntuación 🤩. En "*ver detalles*", a futuro 🌠, nos gustaría implementar otra vista dónde explicase, a detalle, una breve descripción de la obra.

- 🐾Footer🐾: en este caso optamos por un footer sencillo que a futuro llevará las redes sociales dónde poder encontrar nuestro marketplace y cómo contactar con nsootros. 📱💻📧

Posibles proyectos➕:
- Nos gustaría poder mandar mensajes 📫 a los clientes una vez se registran, para confirmar la accón [x], y otra una vez hayan realizado la compra 🛒🛍️, para así quedar constancia de ello.



## Despegamos 💥🚀 
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu ordenador local, para propósitos de desarrollo y pruebas:

Abre la terminal y ejecuta:

Clone git https://github.com/SashaBidardel/Paladia.git para descargar el proyecto, realiza un fork.


## Pre-requisitos 📋💬
Para este proyecto vas a necesitar instalar la última versión de Python acorde a tu sistema operativo, en el sguiente enlace puedes hacerte con ello ➡️ https://www.python.org/downloads/

Una vez instalado el paso anterior, buscaremos en extensiones para Visual Studio Code, la extensión verificada ☑️ para Python.


## 🛠️ Instalación Frontend 🛠️
npm install(node)

### Scripts Disponibles 🔌🔋
- cd paladia
- npm start


## ⚙️ Instalación Backend 🔧
(Esta aplicación supone que el comando `python` ejecuta al menos la versión `3.8`.
 En caso de que no fuera así, hay que tenerlo en cuenta en todos los comandos que uticen `python` y modificarlos en consecuencia).

### Scripts Disponibles 🔌🔋
1. Instalar los paquetes necesarios 📁📦

    `python -m pip install --user -r requirements.txt`

2. Ejecutar los tests 🧪

    `python -m pytest`

3. Generar los datos iniciales 🔛

    `python scripts/initial_data.py`

4. Ejecutar la aplicación 🥇

    `python app.py`



## 🚀 Proyecto en producción
Dónde encontrar el proyecto en producción:

## Wireframe 🛸
Wireframe de la idea principal del proyecto con funcionalidad:
                                                    Home Landing
![1  Home Landing](https://user-images.githubusercontent.com/92159714/154488978-37686cee-3b98-41e6-bb0c-eec8ff036678.png)

                                                    Categorias y Favoritos
![2  Categorias y Favoritos](https://user-images.githubusercontent.com/92159714/154488987-a2c01336-c5fb-42f7-8b1d-c3d77f5c6e16.png)

                                                    Login y Registro
![3  Login y Registro](https://user-images.githubusercontent.com/92159714/154488985-2f6ccd78-6a75-4ea7-84be-acd3cfbd378e.png)

                                                    Carrito de Compra
![4  Carrito de Compra](https://user-images.githubusercontent.com/92159714/154488984-ec6c637e-f5af-4074-a092-626dd0a3d377.png)

                                                    CRUD Libros
![5  CRUD Libros](https://user-images.githubusercontent.com/92159714/154488981-46c9f11b-0c09-4ef6-b8d1-cfb6b3174c44.png)





## Versión Desktop 🛰️
animated

## Versión Mobile First 🪐





## Construido con 🛠️
**Framework**:
 - Flask *more info:* *https://flask.palletsprojects.com/en/2.0.x/*
 - React *more info:* *https://reactjs.org/*

**Lenguajes**:
- Python *more info:* *https://docs.python.org/3/*
- JavaScript *more info:* *https://developer.mozilla.org/es/docs/Web/JavaScript*

**Librerias** (de generación de datos aleatorios):
- Faker *more info:* *https://faker.readthedocs.io/en/master/*

**Obtención de datos aleatorios**:
- Random *more info:* *https://docs.python.org/3/library/random.html*

**ORM**: 
- SQL Alchemy *more info:* *https://flask-sqlalchemy.palletsprojects.com/en/2.x/*

**Base datos**: 
- Sqlite3 *more info:* *https://www.sqlite.org/docs.html*



## Autores 🌻✒️
Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios
- 👽 Clàudia Calero Duró  👀👀👀 github: https://github.com/ClaudiaCalero
- 👽 Ruth Urgiles Dominguez  👀👀👀 gitlab: https://gitlab.com/ruth.u
- 👽 Enmanuel Pereira  👀👀👀 github: https://github.com/iElectro13
- 👽 Hernando Silva Leal  👀👀👀 github: https://github.com/HernandoSilvaLeal
- 👽 Daniel Bustos Nieto  👀👀👀 github: https://github.com/daniel1775
- 👽 Sasha Bidardel Fattahi  👀👀👀 github: https://github.com/SashaBidardel
- 👽 David Alcalde Iglesias  👀👀👀 github: https://github.com/Davaious



## Gratitud 🎁🤸
- Comenta a otros sobre este proyecto 📢🤘
- Apoya nuestros proyectos y danos feedback 🤓🍻
- Proyecto hecho con ❤️, esfuerzo 🦾 y muchas ganas🎢



⌨️ por ClaudiaCalero 🌻

