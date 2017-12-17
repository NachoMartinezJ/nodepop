# nodepop
Práctica node.js

## Inicializar la DB
Podemos utilizar el comando 'npm run installDB'

## Arrancar nuestra app
Podemos utilizar el comando 'npm run start' o bien 'npm run dev' para arrancar la app en modo DEBUG.
Tendremos que cambiar el path a nuestra DB en el fichero ./lib/connectMongoose, modificando la variable pathDB.

## install_db.js
Este fichero nos permite borrar nuestra base de datos e inicializarla con los valores que queramos. Para configurar nuestra DB, tendremos que modificar 4 variables:

* **pathDB**: El path a nuestra data base.
* **pathAnuncios**: El path a el JSON que contiene los datos de nuestros anuncios. Tendremos que poner el JSON en la carpeta 'lib'.
* **pathUsuarios**: El path a el JSON que contiene los datos de nuestros usuarios. Tendremos que poner el JSON en la carpeta 'lib'.
* **collections**: El nombre de las colecciones de nuestra DB, donde queramos guardar la respectiva información.




