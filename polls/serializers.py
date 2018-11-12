from rest_framework import serializers
from . import models

class PersonSerializer(serializers.HyperlinkedModelSerializer):
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

class InstitutionSerializer(serializers.HyperlinkedModelSerializer):
    branches = serializers.HyperlinkedRelatedField(
    many = True,
    read_only = True,
    view_name = 'branch-detail'
    )
    direction = serializers.HyperlinkedRelatedField(
    many = False,
    read_only = True,
    view_name = 'direction-detail'
    ) 
    class Meta:
        model = models.Institution
        fields = ('id_institution', 'name', 'branches', 'direction')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Group
        fields = ('id_group', 'name', 'members', 'leader')

class BranchSerializer(serializers.HyperlinkedModelSerializer):
    departments = serializers.HyperlinkedRelatedField(
    many = True,
    read_only = True,
    view_name = 'department-detail'
    )
    class Meta:
        model = models.Branch
        fields = ('id_branch', 'institution', 'name', 'departments')

class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Article
        fields = ('id_article', 'title', 'authors')

class DepartmentSerializer(serializers.HyperlinkedModelSerializer):
    researchers = serializers.HyperlinkedRelatedField(
    many = True,
    read_only = True,
    view_name = 'researcher-detail'
    )
    class Meta:
        model = models.Department
        fields = ('id_department', 'name', 'phone_number', 'adress', 'branch', 'researchers')

class ResearcherSerializer(serializers.HyperlinkedModelSerializer):
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

class StudentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Student
        fields = ('id_student', 'person', 'supervisor')

class StateSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.States
        fields = ('id_state','name')
