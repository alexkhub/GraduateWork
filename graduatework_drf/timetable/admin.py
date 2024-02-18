from django.contrib import admin
from .models import *


# Register your models here.
class ExamAdmin(admin.ModelAdmin):
    list_display = ('id', 'group', 'subject', 'lecturer', 'start_time', 'end_time', 'classroom')
    list_display_links = ('group', 'subject', 'lecturer')
    search_fields = ('group', 'subject__subject_name', 'lecturer__user')
    list_filter = ('group', 'subject__subject_name', 'lecturer__user', 'classroom')
    list_editable = ('start_time', 'end_time', 'classroom')


class TimetableOfClasseAdmin(admin.ModelAdmin):
    list_display = ('id', 'group', 'subject', 'lecturer', 'lesson_number', 'start_time', 'end_time', 'evenness',
                    'day_of_the_week', 'classroom')
    search_fields = ('group', 'subject__subject_name', 'lecturer__user')
    list_filter = ('group', 'subject__subject_name', 'lecturer__user', 'evenness', 'day_of_the_week', 'classroom')
    list_editable = ('start_time', 'end_time', 'classroom')


class TimetableChangesAdmin(admin.ModelAdmin):
    list_display = (
    'id', 'group', 'subject', 'lecturer', 'lesson_number', 'start_time', 'end_time', 'date', 'classroom')
    search_fields = ('group', 'subject__subject_name', 'lecturer__user')
    list_filter = ('group', 'subject__subject_name', 'lecturer__user', 'classroom')
    list_editable = ('start_time', 'end_time', 'classroom')


class ClassRoomAdmin(admin.ModelAdmin):
    list_display = ('id', 'slug', 'campus', 'number_of_seats', 'number_of_computers')
    list_display_links = ('slug',)
    search_fields = ('slug',)
    list_filter = ('campus',)


class LessonAdmin(admin.ModelAdmin):
    list_display = ('id','lesson_number', 'lesson_topic', 'group', 'subject', 'lecturer', 'date', 'classroom')
    list_display_links = ('id', 'lesson_number', 'lesson_topic',)
    search_fields = ('group', 'subject__subject_name', 'lecturer__user', 'lesson_topic')
    list_filter = ('group', 'subject__subject_name', 'lecturer__user', 'classroom')
    list_editable = ('classroom',)


class JournalAdmin(admin.ModelAdmin):
    list_display = ('id', 'slug', 'group', 'subject', 'lecturer', 'number_of_lesson',)
    list_display_links = ('id', 'slug')
    search_fields = ('group', 'subject__subject_name', 'lecturer__user')
    list_filter = ('group', 'subject__subject_name', 'lecturer__user')
    list_editable = ('number_of_lesson',)


admin.site.register(Exam, ExamAdmin)
admin.site.register(TimetableOfClasses, TimetableOfClasseAdmin)
admin.site.register(TimetableChanges, TimetableChangesAdmin)
admin.site.register(ClassRoom, ClassRoomAdmin)
admin.site.register(Lesson, LessonAdmin)
admin.site.register(Journal, JournalAdmin)
