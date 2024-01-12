from django.contrib import admin
from .models import *
# Register your models here.
class ExamAdmin(admin.ModelAdmin):
    list_display = ('group', 'subject', 'lecturer', 'start_date', 'end_date', 'classroom')
    list_display_links = ('group', 'subject', 'lecturer')
    search_fields = ('group', 'subject__subject_name', 'lecturer__user')
    list_filter = ('group', 'subject__subject_name', 'lecturer__user', 'start_date', 'classroom')
    list_editable = ('start_date', 'end_date', 'classroom')


admin.site.register(Exam, ExamAdmin)
