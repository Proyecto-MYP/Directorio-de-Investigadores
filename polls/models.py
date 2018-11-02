from django.db import models

class Person(models.Model):
    id_person = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 200)
    birthdate = models.DateTimeField("Fecha de nacimiento")
    is_admin = models.BooleanField(default = False)
    mail = models.CharField(max_length = 200)
    phone_number = models.CharField(max_length = 200)

class Institution(models.Model):
    id_institution = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 200)

class Group(models.Model):
    id_group = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 200)
    members = models.CharField(max_length = 200)
    leader = models.ForeignKey(Person, on_delete = models.CASCADE)

class Branch(models.Model):
    id_branch = models.AutoField(primary_key = True)
    id_institution = models.ForeignKey(Institution, on_delete = models.CASCADE)
    name = models.CharField(max_length = 200)

class Article(models.Model):
    id_article = models.AutoField(primary_key = True)
    title = models.CharField(max_length = 200)
    authors = models.CharField(max_length = 200)
    
class Department(models.Model):
    id_department = models.AutoField(primary_key = True)
    phone_number = models.CharField(max_length = 200)
    direction = models.CharField(max_length = 200)
    id_branch = models.ForeignKey(Branch, on_delete = models.CASCADE)
    
class Investigator(models.Model):
    id_investigator = models.AutoField(primary_key = True)
    id_person = models.ForeignKey(Person, on_delete = models.CASCADE)
    id_department = models.ForeignKey(Department, on_delete = models.CASCADE)

class Student(models.Model):
    id_student = models.AutoField(primary_key = True)
    id_person = models.ForeignKey(Person, on_delete = models.CASCADE)
    id_investigator = models.ForeignKey(Investigator, on_delete = models.CASCADE)
    
    
