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
    prepopulated_fields = {'slug': ('subject_name',)}


class LecturerAdmin(admin.ModelAdmin):
    list_display = ('id', 'user')
    list_display_links = ('id', 'user')


class Student_ScoresAdmin(admin.ModelAdmin):
    list_display = ('id', 'student', 'subject', 'lecturer', 'cause', 'points', 'date')
    list_display_links = ('id', 'student', 'subject', 'lecturer')
    search_fields = ('student__username', 'subject__subject_name', 'lecturer__user')
    list_filter = ('subject__subject_name', 'lecturer__user', 'points', 'date')
    list_editable = ('points',)





class ExamAdmin(admin.ModelAdmin):
    list_display = ('id', 'group', 'subject', 'lecturer', 'start_date', 'end_date', 'classroom')
    list_display_links = ('id', 'group', 'subject', 'lecturer')
    search_fields = ('group', 'subject__subject_name', 'lecturer__user')
    list_filter = ('group', 'subject__subject_name', 'lecturer__user', 'start_date', 'classroom')
    list_editable = ('start_date', 'end_date', 'classroom')


class Exam_GradesAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'exam', 'points')


class Overall_PerformanceAdmin(admin.ModelAdmin):
    list_display = ('id', 'student', 'subject', 'exam_grades', 'overall_points')


admin.site.register(Users, UsersAdmin)
admin.site.register(Group, GroupAdmin)
admin.site.register(Subject, SubjectAdmin)
admin.site.register(Lecturer, LecturerAdmin)
admin.site.register(Student_Scores, Student_ScoresAdmin)
admin.site.register(Exam_Grades, Exam_GradesAdmin)
admin.site.register(Overall_Performance, Overall_PerformanceAdmin)
