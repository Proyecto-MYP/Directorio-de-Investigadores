from django.db import models

class States(models.Model):
    id_state = models.CharField(max_length = 2, primary_key = True)
    name = models.CharField(max_length = 100)
    slug = models.CharField(max_length = 100)
    created_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.name


class Person(models.Model):
    id_person = models.AutoField(primary_key = True)
    name = models.TextField(max_length = 200)
    birthdate = models.DateTimeField("Fecha de nacimiento")
    is_admin = models.BooleanField(default = False)
    mail = models.EmailField(max_length = 200)
    phone_number = models.TextField(max_length = 200)
    created_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.name

class Institution(models.Model):
    id_institution = models.AutoField(primary_key = True)
    name = models.TextField(max_length = 200)
    created_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.name

class Branch(models.Model):
    id_branch = models.AutoField(primary_key = True)
    institution = models.ForeignKey(Institution, related_name = 'branches', null = True, on_delete = models.SET_NULL)
    state = models.ForeignKey('States', related_name = 'branches', null = True, on_delete = models.SET_NULL)
    name = models.TextField(max_length = 200)
    created_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return 'branch: ' + self.name

class Department(models.Model):
    id_department = models.AutoField(primary_key = True)
    name = models.TextField(max_length = 200)
    phone_number = models.TextField(max_length = 200)
    adress = models.TextField(max_length = 200)
    branch = models.ForeignKey(Branch, related_name = 'departments',null=True, on_delete = models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return 'department of: ' + self.name

class Researcher(models.Model):
    id_researcher = models.AutoField(primary_key = True)
    person = models.ForeignKey(Person, related_name = 'researcher', on_delete = models.CASCADE)
    department = models.ForeignKey(Department, related_name = 'researchers',null=True, on_delete = models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add = True)
    def __str__(self):
        return 'researcher ' + self.person.name

class Student(models.Model):
    id_student = models.AutoField(primary_key = True)
    person = models.ForeignKey(Person, related_name = 'student', on_delete = models.CASCADE)
    supervisor = models.ForeignKey(Researcher, related_name = 'students', null =True,  on_delete = models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return 'student ' + self.name

class Group(models.Model):
    id_group = models.AutoField(primary_key = True)
    name = models.TextField(max_length = 200)
    members = models.ManyToManyField(Person, related_name = 'groups')
    leader = models.ForeignKey(Researcher, related_name = 'leader', null = True, on_delete = models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.name

class Article(models.Model):
    id_article = models.AutoField(primary_key = True)
    title = models.TextField(max_length = 200)
    authors = models.ManyToManyField(Person, related_name = 'articles')
    created_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.title
