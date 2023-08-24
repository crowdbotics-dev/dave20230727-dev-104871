from django.conf import settings
from django.db import models
class Breed(models.Model):
    'Generated Model'
    name = models.CharField(max_length=100,)
class Pet(models.Model):
    'Generated Model'
    age = models.IntegerField()
