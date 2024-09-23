from django.db import models

# Create your models here.
class CSVData(models.Model):
    column1 = models.CharField(max_length=255)
    column2 = models.CharField(max_length=255)
    column3 = models.CharField(max_length=255)
    column4 = models.CharField(max_length=255)
    column5 = models.CharField(max_length=255)
    column6 = models.CharField(max_length=255)
    column7 = models.CharField(max_length=255)

class JSONData(models.Model):
    key = models.CharField(max_length=255)
    value = models.TextField()