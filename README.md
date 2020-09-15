# 100 Ladrillos Project

100 Ladrillos Project. Desarrollado por
- [Joel Valdivia](https://twitter.com/juelvaldivia).


## Instalación

Se requieren las siguientes herramientas instaladas:

- > [MySql](https://www.mysql.com/)
- > [PHP 7.2](https://www.php.net/releases/7_2_0.php)
- > [Laravel](https://laravel.com/docs/7.x/releases)
- > [NPM](https://www.npmjs.com/)
- > [Composer](https://getcomposer.org/)

Una vez clonado el proyecto es necesario instalar las dependencias de PHP.


    $ sudo composer install

Y también las dependencias de Javascript.

    $ sudo npm install


¡¡¡ANTES NECESITAS TENER INSTALADO MYSQL Y CREAR UNA BASE DE DATOS!!!!
Crea un archivo llamado ".env" similar al ".env-example" ahí asigna el nombre de base de datos, usuario y contraseña.

Luego es necesario ejecutar las migraciones y los seeders para que tengas la base de datos

    $ composer dump-autoload
    $ php artisan migrate
    $ php artisan db:seed

Para Reiniciar la base de datos con un comando 

    $ php artisan migrate:refresh --seed

Es necesario crear una llave para la encriptación

    $ php artisan key:generate


## Pruebas

Para crear pruebas unitarias


    $ php artisan make:test EjemploTest

Se creará un archivo dentro de la carpeta test.

Para verificar las pruebas

    $ php artisan test

## Ejecución

Para ver el proyecto es necesario ejecutar el servidor PHP que tiene Laravel con el siguiente comando.


    $ php artisan serve
    Laravel development server started: http://127.0.0.1:8000

Al escribir el comando mostrará en que IP está corriendo es proyecto de Laravel

Para ver el proyecto y que detecte cambios en React es con el siguiente comando.

    $ npm run watch-poll

Ahora podrás iniciar sesión con el usuario 
    
    usuario: test
    contraseña: test123

## License

MIT licence [MIT license](https://opensource.org/licenses/MIT).
