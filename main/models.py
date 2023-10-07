from django.db import models

# Create your models here.
class MyUser(models.Model):
    user_name = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.user_name


class FileUpload(models.Model):
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    fileUpload = models.FileField(upload_to='uploads/')
    
    def __str__(self):
        return self.user.user_name