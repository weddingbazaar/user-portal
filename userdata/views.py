from django.shortcuts import render


# Create your views here.

def wishlist(request):
    return render(request, 'userdata/wishlist.html')
