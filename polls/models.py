from django.db import models

class Person(models.Model):
    id_person = models.AutoField(primary_key = True)
    name = models.TextField(max_length = 200)
    birthdate = models.DateTimeField("Fecha de nacimiento")
    is_admin = models.BooleanField(default = False)
    mail = models.EmailField(max_length = 200)
    phone_number = models.TextField(max_length = 200)

class Institution(models.Model):
    id_institution = models.AutoField(primary_key = True)
    name = models.TextField(max_length = 200)

class Branch(models.Model):
    id_branch = models.AutoField(primary_key = True)
    institution = models.ForeignKey(Institution, on_delete = models.CASCADE)
    name = models.TextField(max_length = 200)

class Department(models.Model):
    id_department = models.AutoField(primary_key = True)
    phone_number = models.TextField(max_length = 200)
    adress = models.TextField(max_length = 200)
    branch = models.ForeignKey(Branch, on_delete = models.CASCADE)

class Researcher(models.Model):
    id_researcher = models.AutoField(primary_key = True)
    person = models.ForeignKey(Person, on_delete = models.CASCADE)
    department = models.ForeignKey(Department, on_delete = models.CASCADE)

class Student(models.Model):
    id_student = models.AutoField(primary_key = True)
    person = models.ForeignKey(Person, on_delete = models.CASCADE)
    supervisor = models.ForeignKey(Researcher, on_delete = models.CASCADE)

class Group(models.Model):
    id_group = models.AutoField(primary_key = True)
    name = models.TextField(max_length = 200)
    members = models.ManyToManyField(Person)
    leader = models.ForeignKey(Researcher, on_delete = models.CASCADE)

class Article(models.Model):
    id_article = models.AutoField(primary_key = True)
    title = models.TextField(max_length = 200)
    authors = models.ManyToManyField(Person)
