from rest_framework import permissions


class LecturerPermissions(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return True


class DetailStudentQuestPermission(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.user.is_staff or obj.user == request.user:
            return True
        return False


class GroupQuestPermission(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.methode in permissions.SAFE_METHODS or request.user.is_staff:
            return True
        return False
