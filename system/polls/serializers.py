from rest_framework import serializers
from . import models

class PersonSerializer(serializers.ModelSerializer):
    groups = serializers.HyperlinkedRelatedField(
    many = True,
    read_only = True,
    view_name = 'group-detail'
    )
    articles = serializers.HyperlinkedRelatedField(
    many = True,
    read_only = True,
    view_name = 'article-detail'
    )
    class Meta:
        model = models.Person
        fields = ('id_person', 'name', 'birthdate', 'mail', 'phone_number', 'articles', 'groups')

class InstitutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Institution
        fields = ('id_institution', 'name')

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Group
        fields = ('id_group', 'name', 'members', 'leader')

class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Branch
        fields = ('id_branch', 'institution', 'name', 'state')

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Article
        fields = ('id_article', 'title', 'authors')

class DepartmentSerializer(serializers.ModelSerializer):
    researchers = serializers.HyperlinkedRelatedField(
    many = True,
    read_only = True,
    view_name = 'researcher-detail'
    )
    class Meta:
        model = models.Department
        fields = ('id_department', 'name', 'phone_number', 'adress', 'branch', 'researchers')

class ResearcherSerializer(serializers.ModelSerializer):
    students = serializers.HyperlinkedRelatedField(
    many = True,
    read_only = True,
    view_name = 'student-detail'
    )
    leader = serializers.HyperlinkedRelatedField(
    many = True,
    read_only = True,
    view_name = 'researcher-detail'
    )
    class Meta:
        model = models.Researcher
        fields = ('id_researcher', 'person', 'department', 'students', 'leader')

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Student
        fields = ('id_student', 'person', 'supervisor')

class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.States
        fields = ('id_state','name', 'slug')
