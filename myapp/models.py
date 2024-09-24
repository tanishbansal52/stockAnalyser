from django.db import models

# Create your models here.
class stocks(models.Model):
    name = models.CharField(max_length=10, primary_key=True)
    sentiment = models.IntegerField(max_length=50)
    date_last_accessed = models.DateTimeField()