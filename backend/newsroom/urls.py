
from django.urls import path
from . import views


urlpatterns = [
    # headline endpoints
    path("headlines/", views.HeadlineList.as_view()),

    # contact endpoints
    path('contact/create/', views.ContactCreateAPIView.as_view(),
         name='contact-create'),
    path('contacts/search/<str:email>/',
         views.ContactSearchAPIView.as_view(), name='search_contact_by_email'),

    # team endpoints
    path("teams/", views.TeamList.as_view()),
]
