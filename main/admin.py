from django.contrib import admin
from .models import MyUser, FileUpload
# Register your models here.
admin.site.register(MyUser)
admin.site.register(FileUpload)
