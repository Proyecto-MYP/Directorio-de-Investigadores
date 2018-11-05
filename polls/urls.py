from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'person', views.PersonViewSet)
router.register(r'institution', views.InstitutionViewSet)
router.register(r'group', views.GroupViewSet)
router.register(r'branch', views.BranchViewSet)
router.register(r'article', views.ArticleViewSet)
router.register(r'department', views.DepartmentViewSet)
router.register(r'researcher', views.ResearcherViewSet)
router.register(r'student', views.StudentViewSet)

urlpatterns = [
    path('', include(router.urls))
]
