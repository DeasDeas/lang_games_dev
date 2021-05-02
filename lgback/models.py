from datetime import datetime
from django.db import models
import uuid
from django.contrib.auth.models import User


class Item(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    name = models.CharField(max_length=30, null=True)
    private = models.BooleanField(default=True)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    date_created = models.DateTimeField(default=datetime.now())
    date_redacted = models.DateTimeField(auto_now=datetime.now())

    class Meta:
        ordering = ['date_created']

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} ({self.name})'


class PictureItem(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    src = models.TextField()
    word = models.CharField(max_length=200, default='some_word')
    pos_picture = models.IntegerField(default=0)
    pos_word = models.IntegerField(default=0)
    set = models.ForeignKey('Set', on_delete=models.CASCADE)
    theme = models.ForeignKey('Theme', on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    date_created = models.DateTimeField(default=datetime.now())
    date_redacted = models.DateTimeField(auto_now=datetime.now())

    class Meta:
        ordering = ['date_created']

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} ({self.word})'


class Set(models.Model):
    id = models.AutoField(primary_key=True)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=True, blank=True)
    max_size = models.IntegerField(default=12, null=True)
    theme = models.ForeignKey('Theme', on_delete=models.CASCADE)
    repeatable = models.IntegerField(default=0)
    pos = models.IntegerField(default=0)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    date_created = models.DateTimeField(default=datetime.now())
    date_redacted = models.DateTimeField(auto_now=datetime.now())

    class Meta:
        ordering = ['date_created']

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} ({self.name})'


class Theme(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30, null=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    date_created = models.DateTimeField(default=datetime.now())
    date_redacted = models.DateTimeField(auto_now=datetime.now())

    class Meta:
        ordering = ['date_created']

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} ({self.name})'

