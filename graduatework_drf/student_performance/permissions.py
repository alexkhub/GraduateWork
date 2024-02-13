from rest_framework import permissions


class DeleteUserPermissions(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if obj.slug == request.user.slug or request.user.is_superuser or request.methode in permissions.SAFE_METHODS:
            return True
        return False


