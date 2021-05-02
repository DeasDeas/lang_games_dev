from django.contrib import admin
from lgback.models import PictureItem, Item, Set, Theme


class SetInline(admin.TabularInline):
    # fields = ['id', 'name', 'theme', 'max_size', 'owner', 'repeatable']
    model = Set
    extra = 0


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    inlines = [SetInline]
    model = Item


class PictureInline(admin.TabularInline):
    # fields = ['id', 'word', 'src', 'pos', 'set', 'theme', 'owner']
    model = PictureItem
    extra = 1


@admin.register(Set)
class SetAdmin(admin.ModelAdmin):
    # fields = ['theme', 'owner', ('name', 'max_size', 'repeatable')]
    inlines = [PictureInline]


admin.site.register(PictureItem)
admin.site.register(Theme)

# Register your models here.
