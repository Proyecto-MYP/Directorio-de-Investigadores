from django.db import models
from datetime import datetime

class States(models.Model):
    id_state = models.CharField(max_length = 2, primary_key = True)
    name = models.CharField(max_length = 100)
    slug = models.CharField(max_length = 100)
    def __str__(self):
        return self.name

class Person(models.Model):
    id_person = models.AutoField(primary_key = True)
    first_name = models.TextField(max_length = 200)
    last_name = models.TextField(max_length = 200)
    email = models.EmailField(max_length = 200)
    picture = models.TextField(max_length = 200)
    created_at = models.DateTimeField(default = datetime.now)
    def __str__(self):
        return (self.fisrt_name + self.last_name)

class Institution(models.Model):
    id_institution = models.AutoField(primary_key = True)
    name = models.TextField(max_length = 200)
    acronym = models.TextField(max_length = 200, null = True)
    picture = models.TextField(max_length = 200, null = True)
    created_at = models.DateTimeField(default = datetime.now)
    def __str__(self):
        return self.name

class Branch(models.Model):
    id_branch = models.AutoField(primary_key = True)
    institution = models.ForeignKey(Institution, related_name = 'branches', null = True, on_delete = models.SET_NULL)
    name = models.TextField(max_length = 200)
    acronym = models.TextField(max_length = 200, null = True)
    state = models.ForeignKey('States', related_name = 'branches', null = True, on_delete = models.SET_NULL)
    picture = models.TextField(max_length = 200, null = True)
    description = models.TextField(max_length = 500)
    created_at = models.DateTimeField(default = datetime.now)
    def __str__(self):
        return 'branch: ' + self.name

class Researcher(models.Model):
    id_researcher = models.AutoField(primary_key = True)
    person = models.ForeignKey(Person, related_name = 'researcher', on_delete = models.CASCADE)
    created_at = models.DateTimeField(default = datetime.now)
    def __str__(self):
        return 'researcher ' + self.person.name

class Student(models.Model):
    id_student = models.AutoField(primary_key = True)
    person = models.ForeignKey(Person, related_name = 'student', on_delete = models.CASCADE)
    supervisor = models.ForeignKey(Researcher, related_name = 'students', null =True,  on_delete = models.SET_NULL)
    created_at = models.DateTimeField(default = datetime.now)
    def __str__(self):
        return 'student ' + self.name

class Group(models.Model):
    id_group = models.AutoField(primary_key = True)
    name = models.TextField(max_length = 200)
    picture = models.TextField(max_length = 200, null = True)
    members = models.ManyToManyField(Person, related_name = 'groups')
    leader = models.ForeignKey(Researcher, related_name = 'leader', null = True, on_delete = models.SET_NULL)
    created_at = models.DateTimeField(default = datetime.now)
    def __str__(self):
        return self.name

class Article(models.Model):
    id_article = models.AutoField(primary_key = True)
    title = models.TextField(max_length = 200)
    picture = models.TextField(max_length = 200, null = True)
    authors = models.ManyToManyField(Person, related_name = 'articles')
    created_at = models.DateTimeField(default = datetime.now)
    def __str__(self):
        return self.title
