#Backend
	-Instalar [docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/#set-up-the-repository)
	-instalar [docker-compose](https://docs.docker.com/compose/install/)
	-Ejecutar el comando:
		$docker-compose up --build
Con estos pasos el servidor ya deja de correr en el server de Django y corre en Gunicorn

## Migraciones:
	-$docker ps
	-copiar el id de "directorio-de-investigadores_djangoapp02"
	-$docker exec -it <id de la imagen> bash
	Se abrira una shell dentro del contenedor.
	-$cd system/
	-$python manage.py makemigrations polls
	-$python manage.py makemigrations users
	-$python manage.py migrate
## Frontend:
Para levantar el front, que por ahora sigue como una imagen aparte:
	-cambiar al directorio de views/
	-docker build -t my-angular-project:prod .
	-docker run -p 80:80 my-angular-project:dev

