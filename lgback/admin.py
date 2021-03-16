from django.contrib import admin
from lgback.models import Picture, Session, Set, SessionInstance, PictureGameResult, Theme


class SessionInstanceInline(admin.TabularInline):
    fields = ['id', 'status', 'user']
    model = SessionInstance
    extra = 1


class SetInline(admin.TabularInline):
    fields = ['id', 'name', 'theme', 'max_size', 'owner', 'repeatable', 'session']
    model = Set
    extra = 0


@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
    inlines = [SetInline, SessionInstanceInline]


class PictureInline(admin.TabularInline):
    fields = ['id', 'word', 'src', 'pos', 'set', 'theme', 'owner']
    model = Picture
    extra = 1


@admin.register(Set)
class SetAdmin(admin.ModelAdmin):
    fields = ['theme', 'owner', ('name', 'max_size', 'repeatable')]
    inlines = [PictureInline]


admin.site.register(Picture)
admin.site.register(PictureGameResult)
admin.site.register(Theme)

# Register your models here.
