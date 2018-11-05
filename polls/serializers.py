from rest_framework import serializers
from . import models

class PersonSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Person
        fields = ('id_person', 'name', 'birthdate', 'mail', 'phone_number')

class InstitutionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Institution
        fields = ('id_institution', 'name')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Group
        fields = ('id_group', 'name', 'members', 'leader')

class BranchSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Branch
        fields = ('id_branch', 'institution', 'name')

class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Article
        fields = ('id_article', 'title', 'authors')

class DepartmentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Department
        fields = ('id_department', 'phone_number', 'adress', 'branch')

class ResearcherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Researcher
        fields = ('id_researcher', 'person', 'department')

class StudentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Student
        fields = ('id_student', 'person', 'supervisor')
