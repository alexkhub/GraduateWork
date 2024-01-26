from rest_framework import permissions


class LecturerPermissions(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return True


