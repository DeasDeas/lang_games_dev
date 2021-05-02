from rest_framework.permissions import IsAdminUser, BasePermission, SAFE_METHODS


class AuthorOnly(BasePermission):
    message = 'Editing instance is restricted to the author only'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True

        print(request)
        return request.user == obj.owner


class IsAdminUserCustom(IsAdminUser):
    def __init__(self):
        super().__init__()

    def has_object_permission(self, request, view, obj):
        return super().has_permission(request, view)
