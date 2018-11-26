#!/bin/bash

# Start Gunicorn processes
echo Starting Gunicorn.
python system/manage.py makemigrations polls
python system/manage.py makemigrations users
python system/manage.py migrate
exec gunicorn Backend.wsgi:application \
    --bind 0.0.0.0:8000 \
    --workers 2 \
    --chdir system/
