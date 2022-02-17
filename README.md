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

 - Navbar: en el extremo izquierdo, tendremos un 📊 "*icon bar*" 📊, donde en un futuro nos gustaría incluir un apartado **login/singn up** para nuestros usuarios. 🙆‍♀️ En el caso del extremo derecho tendremos 🛒"*icon cart*" 🛒, en un futuro nos gustaría poder darle esa funcionalidad real de carrito de compra y obtener así una experiencia completa. 🛍️

 - 🔍Search Container🔍: nuestro usuario, a futuro, podrá buscar el libro que necesite el cual será filtrado en nuestra base de datos por el componente filter. 🔖

- Category Container: encontraremos las categorías que disponemos en la aplicación 📇, para una búsqueda más agilizada del género de libro 📖 que deseemos buscar, además de esto tendremos un hover de desplazamiento 🌔 en caso de pasar el mouse por encima de las cards. 🐭

- 🍾Recommended Container🏆: en este apartado tendremos los libros más 🌟top del momento🌟, puntuados por nuestros clientes y recomendados al resto de usuarios, en este caso una vez pasemos el mouse 🐭🧀 tendremos una pequeña animación que acercará el contenedor escogido y le cambiará el color para resaltarlo del resto 📌, una vez quitemos el mouse volverá a su estado original. En recomendados, encontraremos la imagen del libro destacado🌟, su título, el género, el precio a pagar 💲💲💲 (si deseamos adquirirlo), además de la estrella de puntuación 🤩. En "*ver detalles*", nos enviará a otra vista dónde nos explica, a detalle, una breve descripción de la obra.

- 🐾Footer🐾: en este caso optamos por un footer sencillo que, a futuro 🌠, llevará las redes sociales, dónde poder encontrar nuestro marketplace y cómo contactar con nosotros. 📱💻📧

➕ Posibles proyectos ➕:
- Nos gustaría poder mandar mensajes 📫 a los clientes, una vez se registran, para confirmar la acción. [ ]
- Mandar otro mensaje 📧, una vez hayan realizado la compra 🛒🛍️, para así quedar constancia de ello. [ ]




## Despegamos 💥🚀 
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu ordenador local, para propósitos de desarrollo y pruebas:

Abre la terminal y ejecuta:

Clone git https://github.com/SashaBidardel/Paladia.git para descargar el proyecto, realiza un fork.



## Pre-requisitos Generales 📋💬
Para este proyecto vas a necesitar instalar la última versión de Python, acorde a tu sistema operativo, en el siguiente enlace puedes hacerte con ello ➡️ https://www.python.org/downloads/

Una vez instalado el paso anterior, buscaremos en extensiones para Visual Studio Code, la extensión verificada ☑️ para Python.

## 🛠️ Instalación Frontend 🛠️
Lo primero que debes hacer es instalar node, desde la consola de tu editor de codigo con el comando npm install.

Ahora, una vez descargado el codigo del front end, debes ejecutar desde la terminal el comando npm start, el cual inicializará el proyecto para que se ejecute de manera local, por lo general en el puerto 3000.

Ahora bien, en detalle de la estructura de carpetas, se gestionaron con una jerarquía de componentes basada en las vistas principales, de manera que tiene 3 subniveles de carpetas, organizadas segun la composicion del mockup realizado en figma y la navegabilidad predefinida para el usuario.

Algo muy importante dentro de la construccion del front, fue la gestion de conexion entre componentes, la utilizacion de estilos condicionales, la comunicacion entre las props, y la logica de hocks en cada componente.

### Scripts Disponibles 🔌🔋
- cd paladia
- npm start




## Pre-requisitos Backend 📋💬
Repositorio despliegue del backend: https://github.com/iElectro13/paladia-backend

1. Crear un **entorno virtual**, con *venv* o *virtualenv* 📐

2. Activar el entorno virtual 🛐

3. `pip install -r requirements.txt` 🧰

4. Crear un archivo *.env* donde escribiremos: `export SECRET_KEY="dev"`
        ⚠️(esta variable solo funcionará en un entorno de desarrollo)⚠️

5. Ejecutar: flask run 🏁


✋ Este entorno virtual será distinto en cada sistema operativo, por lo que es importante saber qué pasos debemos seguir en cada caso, abajo os dejamos los enlaces para los sistemas de Windowa, MAC y Linux con sus respectivos tutoriales y documentación. 🥰

- Windows: https://docs.python.org/es/3/tutorial/venv.html

- MAC: https://m-monroyc22.medium.com/configurar-entorno-virtual-python-a860e820aace

- Linux: https://conpilar.es/como-crear-un-entorno-virtual-python-3-en-ubuntu-20-04/



## ⚙️ Instalación Backend 🔧
(Esta aplicación supone que el comando `python` ejecuta al menos la versión `3.8`.
 En caso de no ser así, se debe tener en cuenta en todos los comandos que uticen `python` y modificarlos en consecuencia).


### Scripts Disponibles 🔌🔋
1. Instalar los paquetes necesarios 📁📦

    `python -m pip install --user -r requirements.txt`

2. Ejecutar los tests 🧪

    `python -m pytest`

3. Generar los datos iniciales 🔛

    `python scripts/initial_data.py`

4. Ejecutar la aplicación 🥇

    `python app.py`



## API Documentation: 💤
Estas son las endpoint para poder interactuar con nuestra API.👐💟👐
En caso de usarse como referencia para vuestros proyectos, 
       🍀¡Nos encantaría ver vuestros repositorios!🍀

- Base url: https://paladia-api.herokuapp.com/api/v1
- get all books: /books
- get book by id /books/<id>
- get book by category: books/<category>
- create new book: books/new
- this route expectes this schema:
        {
          "title":"Cien años de soledad",
          "category":"Realismo magico",
          "description":"Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982.",
          "image":"no-image",
          "price": 100,
          "seller":"Enmanuel Pereira"
        }
-delete book: books/delete/<id>





## 🚀 Proyecto en producción 🌙
Dónde encontrar el proyecto en producción:

## Wireframe 🛸
Wireframe de la idea principal del proyecto con funcionalidad:

                                                   Home Landing
![1  Home Landing](https://user-images.githubusercontent.com/92159714/154488978-37686cee-3b98-41e6-bb0c-eec8ff036678.png)

                                                   Categorias 
![2  Categorias y Favoritos](https://user-images.githubusercontent.com/92159714/154488987-a2c01336-c5fb-42f7-8b1d-c3d77f5c6e16.png)

                                                   Login y Registro
![3  Login y Registro](https://user-images.githubusercontent.com/92159714/154488985-2f6ccd78-6a75-4ea7-84be-acd3cfbd378e.png)

                                                   Carrito de Compra
![4  Carrito de Compra](https://user-images.githubusercontent.com/92159714/154488984-ec6c637e-f5af-4074-a092-626dd0a3d377.png)

                                                   CRUD Libros
![5  CRUD Libros](https://user-images.githubusercontent.com/92159714/154488981-46c9f11b-0c09-4ef6-b8d1-cfb6b3174c44.png)





## Versión Desktop 🛰️

        Home Landing
![1](https://user-images.githubusercontent.com/92159714/154507580-05f78ba2-d734-47ab-ab53-55c2fddba302.gif)

        Categorias 
![2](https://user-images.githubusercontent.com/92159714/154509223-fecad066-7453-4443-9ffb-fb954ab8a3c3.gif)

        Search Bar 
![3](https://user-images.githubusercontent.com/92159714/154509688-9ff866f1-ed9b-4720-b0bc-a992917a5f15.gif)

        Login y Registro
![4](https://user-images.githubusercontent.com/92159714/154509967-147d20cb-4d88-4a51-a247-3ecfdc393495.gif)

        Recomendados 
![5](https://user-images.githubusercontent.com/92159714/154510170-8c1d4680-82ea-452a-9048-8226c5f2bd6a.gif)





## Versión Mobile First 🪐
        Home Landing
![1 1](https://user-images.githubusercontent.com/92159714/154514817-174be59a-b951-483a-867b-23af04171d75.gif)

        Categorias 
![2 2](https://user-images.githubusercontent.com/92159714/154517462-cf3fc30f-6a93-4910-b9d2-ead0cbf98213.gif)

        Search Bar 
![3 3](https://user-images.githubusercontent.com/92159714/154515910-8b21ae09-84c8-42a4-abd7-b360617633e1.gif)

        Login y Registro
![4 4](https://user-images.githubusercontent.com/92159714/154515394-93a2467f-5b65-4a25-ad17-9c1f72da71a4.gif)

        Recomendados 
![5 5](https://user-images.githubusercontent.com/92159714/154515703-550a23c4-8dad-4d50-bd51-bd995f519a44.gif)


         



## Construido con 🛠️
**Framework**:
 - Flask   *more info:* *https://flask.palletsprojects.com/en/2.0.x/*
 - React   *more info:* *https://reactjs.org/*

**Lenguajes**:
- Python   *more info:* *https://docs.python.org/3/*
- JavaScript   *more info:* *https://developer.mozilla.org/es/docs/Web/JavaScript*

**Librerias** (de generación de datos aleatorios):
- Faker   *more info:* *https://faker.readthedocs.io/en/master/*

**Obtención de datos aleatorios**:
- Random   *more info:* *https://docs.python.org/3/library/random.html*

**ORM**: 
- SQL Alchemy   *more info:* *https://flask-sqlalchemy.palletsprojects.com/en/2.x/*

**Base datos**: 
- Sqlite3   *more info:* *https://www.sqlite.org/docs.html*

**Tecnología para test**:
- Postman   *more info:* *https://learning.postman.com/docs/getting-started/introduction/*



## Autores 🌻✒️
Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios
- 👽 Clàudia Calero Duró  👀👀👀 github: https://github.com/ClaudiaCalero  
        🛸📍Linkedin: https://www.linkedin.com/in/claudia-calero/

- 👽 Ruth Urgiles Dominguez  👀👀👀 gitlab: https://gitlab.com/ruth.u 

- 👽 Enmanuel Pereira  👀👀👀 github: https://github.com/iElectro13  
        🛸📍Linkedin: https://www.linkedin.com/in/enmanuel-pereira-quijano-b6b45a21b/

- 👽 Hernando Silva Leal  👀👀👀 github: https://github.com/HernandoSilvaLeal  
        🛸📍Linkedin: https://www.linkedin.com/in/hernandosilvaleal/

- 👽 Daniel Bustos Nieto  👀👀👀 github: https://github.com/daniel1775  
        🛸📍Linkedin: https://www.linkedin.com/in/daniel-bustos-nieto-71407619a/

- 👽 Sasha Bidardel Fattahi  👀👀👀 github: https://github.com/SashaBidardel    
        🛸📍Linkedin: https://www.linkedin.com/in/sashabidardelfattahi/
        
- 👽 David Alcalde Iglesias  👀👀👀 github: https://github.com/Davaious   



## Gratitud 🎁🤸
- Comenta a otros sobre este proyecto 📢🤘
- Apoya nuestros proyectos y danos feedback 🤓🍻
- Proyecto hecho con ❤️, esfuerzo 🦾 y muchas ganas🎢




⌨️ por ClaudiaCalero 🌻

