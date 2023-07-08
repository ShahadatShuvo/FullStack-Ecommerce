from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from store import views
from account import views
from newsroom import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("store.urls")),
    path("api/account/", include("account.urls")),
    path("api/newsroom/", include("newsroom.urls")),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
