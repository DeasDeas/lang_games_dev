from django.db import models
import uuid  # Required for unique indexes
from django.contrib.auth.models import User


class Session(models.Model):
    name = models.CharField(max_length=30, null=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    private = models.BooleanField(default=True)

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} ({self.name})'


class Picture(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    src = models.TextField()
    word = models.CharField(max_length=200, default='some_word')
    pos = models.IntegerField(default=0)
    set = models.ForeignKey('Set', on_delete=models.CASCADE)
    theme = models.ForeignKey('Theme', on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)

    class Meta:
        ordering = ['set_id', 'pos']

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} ({self.word})'


class Set(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    max_size = models.IntegerField(default=9, null=True)
    theme = models.ForeignKey('Theme', on_delete=models.CASCADE)
    session = models.ForeignKey(Session, on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    repeatable = models.IntegerField(default=0)

    class Meta:
        ordering = ['id']

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} ({self.name})'


class Theme(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30, null=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} ({self.name})'


class SessionInstance(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    session = models.ForeignKey(Session, on_delete=models.CASCADE)

    STATUS_CHOICES = (
        (1, "New"),
        (2, "In progress"),
        (3, "Completed"),
        (4, "Done")
    )

    status = models.IntegerField(choices=STATUS_CHOICES, default=1)

    class Meta:
        ordering: ['status']

    def __str__(self):
        """String for representing the Model object."""
        return f'instance: {self.id}'


class PictureGameResult(models.Model):
    session_instance = models.ForeignKey(Session, on_delete=models.CASCADE)
    set = models.ForeignKey(Set, on_delete=models.CASCADE)
    picture = models.ForeignKey(Picture, on_delete=models.CASCADE, default=None)
    correct = models.BooleanField(null=True)

    class Meta:
        ordering: ['session_instance']

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} session_instance: {self.session_instance_id}'
