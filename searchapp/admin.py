from django.contrib import admin
# Register your models here.
from .models import VendorInfo, Category

admin.site.register(VendorInfo)
admin.site.register(Category)
