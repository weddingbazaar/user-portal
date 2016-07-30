from django.conf.urls import url
from . import views

app_name = 'usredata'

urlpatterns = [
    url(r'^$', views.wishlist, name='info'),
    # url(r'^(?P<city>[a-z]+)/(?P<category>[a-z]+)/$', views.search, name='search'),
    # url(r'^(?P<city>[a-z]+)/(?P<category>[a-z]+)/(?P<business>[a-zA-Z0-9\-_]+)/$', views.item, name='item'),

]
