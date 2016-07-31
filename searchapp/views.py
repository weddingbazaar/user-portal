from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import render

from .models import Category as c
from .models import VendorInfo as v


# Create your views here.


def search(request, **kwargs):
    print(request)
    print(kwargs)
    cinfo = c.objects.all().filter(city=kwargs['city']).filter(**{kwargs['category']: True})
    print(cinfo)
    paginator = Paginator(cinfo, 12)  # Show 25 contacts per page

    page = request.GET.get('page')
    ppge = 1
    try:
        pno = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        pno = paginator.page(1)
        page = 1
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        pno = paginator.page(paginator.num_pages)

    while (int(page) - 1) > 0:
        ppge = int(page) - 1

    vinfo = cinfo[0].vendor.first_name
    print(vinfo)
    context_data = {
        'category': kwargs['category'],
        'city': kwargs['city'],
        'objlist': pno,
        'pgno': page,
        'npage': int(page) + 1,
        'ppage': ppge
    }
    # return render(request, 'homeapp/index.html')
    # return HttpResponse('<h3>search detail for :'+str(kwargs['city'])+str(kwargs['category'])+' </h3>')
    # if request.method == 'GET':
    #     city = request.GET['city']
    #     category = request.GET['category']
    #     subcat = request.GET['subcateg']
    return render(request, 'searchapp/searchpage.html', context_data)


def item(request, **kwargs):
    print(kwargs)
    vinfo = v.objects.all().filter(slug=kwargs['business'])
    print(vinfo[0].address)
    context_data = {
        'objlist': vinfo[0],
        'category': kwargs['category'],
        'city': kwargs['city'],
    }
    return render(request, 'item.html', context_data)
