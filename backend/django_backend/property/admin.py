from django.contrib import admin

from .models import Property



class PropertyAdmin(admin.ModelAdmin):
    list_filter = ('title',)

admin.site.register(Property, PropertyAdmin)