from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include("state_data.urls")),
    path('',include("predictor.urls"))
]
