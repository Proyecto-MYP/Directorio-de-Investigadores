from rest_framework import viewsets
from . import models
from . import serializers

class PersonViewSet(viewsets.ModelViewSet):
    queryset = models.Person.objects.all()
    serializer_class = serializers.PersonSerializer
    filter_fields = ('id_person', 'first_name', 'last_name', 'email', 'picture', 'created_at','articles','groups')

class InstitutionViewSet(viewsets.ModelViewSet):
    queryset = models.Institution.objects.all()
    serializer_class = serializers.InstitutionSerializer
    filter_fields = ('id_institution', 'name')


class GroupViewSet(viewsets.ModelViewSet):
    queryset = models.Group.objects.all()
    serializer_class = serializers.GroupSerializer
    filter_fields = ('id_group', 'name', 'members', 'leader')

class BranchViewSet(viewsets.ModelViewSet):
    queryset = models.Branch.objects.all()
    serializer_class = serializers.BranchSerializer
    filter_fields = ('id_branch', 'institution', 'name', 'state')

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = models.Article.objects.all()
    serializer_class = serializers.ArticleSerializer
    filter_fields = ('id_article', 'title', 'authors')

class ResearcherViewSet(viewsets.ModelViewSet):
    queryset = models.Researcher.objects.all()
    serializer_class = serializers.ResearcherSerializer
    filter_fields = ('id_researcher', 'person', 'department', 'students', 'leader')

class StudentViewSet(viewsets.ModelViewSet):
    queryset = models.Student.objects.all()
    serializer_class = serializers.StudentSerializer
    filter_fields = ('id_student', 'person', 'supervisor')

class StateViewSet(viewsets.ModelViewSet):
    queryset = models.States.objects.all()
    serializer_class = serializers.StateSerializer
    filter_fields = ('id_state','name', 'slug')
