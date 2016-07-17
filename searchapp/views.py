from django.shortcuts import render, get_object_or_404
# from django.http import HttpResponse


# Create your views here.


def search(request, **kwargs):
    print(request)
    print(kwargs)
    # return render(request, 'homeapp/index.html')
    # return HttpResponse('<h3>search detail for :'+str(kwargs['city'])+str(kwargs['category'])+' </h3>')
    # if request.method == 'GET':
    #     city = request.GET['city']
    #     category = request.GET['category']
    #     subcat = request.GET['subcateg']
    return render(request, 'searchapp/searchpage.html')
