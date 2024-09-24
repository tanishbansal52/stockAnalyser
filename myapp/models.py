from django.db import models

# Create your models here.
class stocks(models.Model):
    name = models.CharField(max_length=10, primary_key=True)
    sentiment = models.DecimalField(max_digits=13,decimal_places=10)
    date_last_accessed = models.DateField(auto_now=True)