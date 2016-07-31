from django.conf.urls import url
from . import views

app_name = 'searchapp'

urlpatterns = [
    url(r'^$', views.search, name='search'),
    url(r'^(?P<city>[a-z]+)/(?P<category>[a-z]+)/$', views.search, name='search'),
    url(r'^(?P<city>[a-z]+)/(?P<category>[a-z]+)/(?P<business>[a-zA-Z0-9\-_]+)/$', views.item, name='item'),
]
