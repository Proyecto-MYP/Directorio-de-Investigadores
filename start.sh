#!/bin/bash

# Start Gunicorn processes
echo Starting Gunicorn.
exec gunicorn Backend.wsgi:application \
    --bind 0.0.0.0:8000 \
    --workers 2 \
    --chdir system/
