from django.contrib import admin

from .models import Property, Reservation



class PropertyAdmin(admin.ModelAdmin):
    list_filter = ('title',)

admin.site.register(Property, PropertyAdmin)

admin.site.register(Reservation)