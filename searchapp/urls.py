from django.conf.urls import url
from . import views

app_name = 'searchapp'

urlpatterns = [

    url(r'^(?P<city>[a-z]+)/(?P<category>[a-z]+)$', views.search, name='search'),
    # url(r'^$', views.search, name='search'),
]
