from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    name = models.TextField(blank = True, max_length = 255)
    email = models.EmailField(max_length = 200)
    password = models.CharField(('password'), max_length=128)
    def __str__(self):
        return self.email
