# beenVerified_jarguedas
Referencias FE = front end,  BE = back end
Detalles tecnicos:
El FE esta en angular y el BE es expressjs para los datos se utiliza sqlite. 
BeenVerified - Jr. Software Engineer

Para ejecutar el proyecto localmente se deben seguir los siguientes pasos:

Instalar git en la maquina local una vez instalado realizar un git clone del repositorio 
https://github.com/jorgeargds/beenVerified_jarguedas

Una vez realizado el git clone instalar angular-cli  globalmente npm install -g @angular/cli, para esto debemos tener previamente instalado npm la version de npm que vamos a utilizar es la recomendado que seria la 8.11 ya que sqlite3 solo sirve con esta
version.

Inslatacion del FE
Para instalar el FE debemos movernos a la siguiente direccion beenVerified_jarguedas/FE/beenVerifiedFe
que se encuentra dentro del proyecto que descargamos de git,
una vez ubicados en esta direccion ejecutamos los siguientes comandos:
npm install (Inicializa los modulos de node)
npm start (Ejecuta la aplicacion de Angular)


Instalacion del BE
Igual para instalar el BE debemos ingresar a la direccion beenVerified_jarguedas/BE
npm install (Inicializa los modulos de node)
npm start (Ejecuta la aplicacion de Angular)
Despues nos movemos a la carpeta app y ejecutamos node server.js

Una vez realizados estos pasos tanto el FE como el BE estaran ejecutandose 
Para realizar las pruebas ingresamos a la siguiente direccion
http://localhost:4200/

Los puertos que se estan usando son los siguientes:
4200 para el FE y 3000 para el BE

NOTAS: Los selects traen los datos segun los filtros enviados pero no se tiene un dominio de filtro con eso me refieron que
si se envia el title como 'party' pero se busca en Country ejemplo no traiga la cancion Party Rock.

Ademas segun el pdf las propiedades de la tabla song son genre, song, duration, artist pero el campo song no exite en realidad es title.
