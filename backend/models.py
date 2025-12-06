from django.db import models




class Post(models.Model):
    title = models.TextField(null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
