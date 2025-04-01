from django.urls import path
from .views import (
    all_companies, company_info, company_vacancies, 
    all_vacancies, vacancy_info, best_vacancies
)

urlpatterns = [
    path('companies/', all_companies, name='company-list'),
    path('companies/<int:id>/', company_info, name='company-info'),
    path('companies/<int:id>/vacancies/', company_vacancies, name='company-vacancies'),
    path('vacancies/', all_vacancies, name='vacancy-list'),
    path('vacancies/<int:id>/', vacancy_info, name='vacancy-info'),
    path('vacancies/top/', best_vacancies, name='best-vacancies'),
]
