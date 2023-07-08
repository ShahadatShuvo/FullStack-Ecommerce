
from django.urls import path
from . import views


urlpatterns = [
    # headline endpoints
    path("headlines/", views.HeadlineList.as_view()),

]
