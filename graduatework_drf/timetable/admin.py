from django.contrib import admin
from .models import *


# Register your models here.
class ExamAdmin(admin.ModelAdmin):
    list_display = ('group', 'subject', 'lecturer', 'start_date', 'end_date', 'classroom')
    list_display_links = ('group', 'subject', 'lecturer')
    search_fields = ('group', 'subject__subject_name', 'lecturer__user')
    list_filter = ('group', 'subject__subject_name', 'lecturer__user', 'start_date', 'classroom')
    list_editable = ('start_date', 'end_date', 'classroom')


class TimetableOfClasseAdmin(admin.ModelAdmin):
    list_display = (
        'group', 'subject', 'lecturer', 'lesson_number', 'start_time', 'end_time', 'evenness', 'day_of_the_week',
        'classroom')
    search_fields = ('group', 'subject__subject_name', 'lecturer__user')
    list_filter = ('group', 'subject__subject_name', 'lecturer__user', 'evenness', 'day_of_the_week', 'classroom')
    list_editable = ('start_time', 'end_time', 'classroom')


class TimetableChangesAdmin(admin.ModelAdmin):
    list_display = (
        'group', 'subject', 'lecturer', 'lesson_number', 'start_time', 'end_time', 'date', 'day_of_the_week',
        'classroom')
    search_fields = ('group', 'subject__subject_name', 'lecturer__user')
    list_filter = ('group', 'subject__subject_name', 'lecturer__user', 'day_of_the_week', 'classroom')
    list_editable = ('start_time', 'end_time', 'classroom')


admin.site.register(Exam, ExamAdmin)
admin.site.register(TimetableOfClasses, TimetableOfClasseAdmin)
admin.site.register(TimetableChanges, TimetableChangesAdmin)
