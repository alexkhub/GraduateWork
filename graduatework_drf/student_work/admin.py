from django.contrib import admin

from .models import *
# Register your models here.

class QuestAdmin(admin.ModelAdmin):
    list_display = ('id', 'quest_name', 'subject', 'lecturer', 'group', 'description', 'date_added', 'date_pass')
    list_display_links = ('id', 'subject')
    search_fields = ('id', 'subject', 'description')


class UserQuestAdmin(admin.ModelAdmin):
    list_display = ('id', 'status', 'quest', 'user', 'comment', 'date_added')
    list_display_links = ('id', 'user')
    search_fields = ('id', 'quest')

admin.site.register(Quest, QuestAdmin)
admin.site.register(UserQuest, UserQuestAdmin)
