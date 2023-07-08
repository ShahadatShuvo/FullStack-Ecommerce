
from django.urls import path
from . import views


urlpatterns = [
    # headline endpoints
    path("headlines/", views.HeadlineList.as_view()),

    # contact endpoints
    path('contact/create/', views.ContactCreateAPIView.as_view(),
         name='contact-create'),

    # team endpoints
    path("teams/", views.TeamList.as_view()),

]
