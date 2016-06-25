# from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse


# Create your views here.


def search(request):
    # return render(request, 'homeapp/index.html')
    # return HttpResponse('<h3>search detail for :'+str(city)+str(category)+' </h3>')
    print "##########################", request
    if request.method == 'GET':
        city = request.GET['city']
        category = request.GET['category']
        subcat = request.GET['subcateg']
        return HttpResponse(
            '<h3>search detail for : ' + str(city) + ', cat: '  + str(category) + ', sub: ' + str(subcat) + ' </h3>')
