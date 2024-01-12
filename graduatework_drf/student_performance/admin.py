from django.contrib import admin
from .models import *


class UsersAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'phone', 'is_staff', 'group')
    list_display_links = ('id', 'username', 'email', 'phone',)
    search_fields = ('id', 'username', 'phone', 'email')
    list_filter = ('is_staff', 'group')


class GroupAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'curs')
    list_display_links = ('name', 'curs')
    search_fields = ('name',)
    list_filter = ('curs',)
    prepopulated_fields = {'slug': ('name',)}


class SubjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'subject_name', 'subject_code')
    list_display_links = ('id', 'subject_name', 'subject_code')
    search_fields = ('subject_name', 'subject_code')
    prepopulated_fields = {'slug': ('subject_name', 'subject_code')}


class LecturerAdmin(admin.ModelAdmin):
    list_display = ('id', 'user')
    list_display_links = ('id', 'user')


class MeasurableTypesControlAdmin(admin.ModelAdmin):
    list_display = ('student', 'subject', 'lecturer', 'cause', 'points', 'date')
    list_display_links = ('student', 'subject', 'lecturer')
    search_fields = ('student__username', 'subject__subject_name', 'lecturer__user')
    list_filter = ('subject__subject_name', 'lecturer__user', 'points', 'date')
    list_editable = ('points',)


class OtherMeasurableTypesControlAdmin(admin.ModelAdmin):
    list_display = ('student', 'subject', 'lecturer', 'cause', 'points', 'date')
    list_display_links = ('student', 'subject', 'lecturer')
    search_fields = ('student', 'subject', 'lecturer')
    list_filter = ('student', 'subject', 'lecturer', 'points', 'date')
    list_editable = ('points',)


class ExamAdmin(admin.ModelAdmin):
    list_display = ('group', 'subject', 'lecturer', 'start_date', 'end_date', 'classroom')
    list_display_links = ('group', 'subject', 'lecturer')
    search_fields = ('group', 'subject__subject_name', 'lecturer__user')
    list_filter = ('group', 'subject__subject_name', 'lecturer__user', 'start_date', 'classroom')
    list_editable = ('start_date', 'end_date', 'classroom')


admin.site.register(Users, UsersAdmin)
admin.site.register(Group, GroupAdmin)
admin.site.register(Subject, SubjectAdmin)
admin.site.register(Lecturer, LecturerAdmin)
admin.site.register(MeasurableTypesControl, MeasurableTypesControlAdmin)
admin.site.register(OtherMeasurableTypesControl, OtherMeasurableTypesControlAdmin)
