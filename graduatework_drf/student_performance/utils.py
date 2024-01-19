from django_filters import rest_framework as filters

from .models import *


class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass


class MeasurableTypesControlFilter(filters.FilterSet):
    subject = CharFilterInFilter(field_name='subject__subject_name', lookup_expr='in')
    date = filters.DateFilter(field_name='date', lookup_expr='gte')

    class Meta:
        model = MeasurableTypesControl
        fields = ['subject', 'date']


