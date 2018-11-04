# Backend

Para correr el proyecto, hay quu clonar el repositorio,

      $git clone https://github.com/Proyecto-MYP/Backend

## Dependencias

Se recomiendo usar virtualenv para manejar dependencias.

      $virtualenv -p python3 projectEnv

Luego instalar las dependencias con pip

      $pip install -r requirements

Y para correr el servidor de desarrollo

      $python manage.py runserver

## Base de datos

De momento, es necesario ya tener instalado PostgreSQL con una base de datos
llamada 'project' con un usuario 'admin' con contraseña 'admin'.
