import rest_framework_filters as filters
from lgback.models import Item, Set, PictureItem


class ItemFilter(filters.FilterSet):
    class Meta:
        model = Item
        fields = {'private': ['exact'], 'owner': ['exact']}


class SetFilter(filters.FilterSet):
    class Meta:
        model = Set
        fields = {'item': ['exact'], 'owner': ['exact']}


class PictureItemFilter(filters.FilterSet):
    set = filters.RelatedFilter('SetFilter', queryset=Set.objects.all())

    class Meta:
        model = PictureItem
        fields = {'owner': ['exact']}
