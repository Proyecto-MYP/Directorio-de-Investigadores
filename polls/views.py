from django.shortcuts import render

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from polls.models import *
from  django.db import connection
#from polls.serializers import *

#class JSONResponse(HttpResponse):
#    """
#    An HttpResponse that renders its content into JSON.
#    """
#    def __init__(self, data, **kwargs):
#        content = JSONRenderer().render(data)
#        kwargs['content_type'] = 'application/json'
#        super(JSONResponse, self).__init__(content, **kwargs)
def index(request):
    cursor = connection.cursor()
    cursor.execute("select * from polls_article")
    row = cursor.fetchall()
    return HttpResponse(row)

@csrf_exempt
def save_institution(request):
    b = Institution(name=request.POST['name'])
    b.save()
    return HttpResponse("OK")

def get_institution(request):
    b = Institution.objects.all().count()
    return HttpResponse(b)
