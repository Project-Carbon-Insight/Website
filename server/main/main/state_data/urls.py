from django.urls import path
from .views import get_usage,get_production,get_monthlysold,get_latesps,get_energy,get_energ

urlpatterns = [
    path('susage/<str:pk1>/<int:pk2>/<int:pk3>',get_usage),
    path('sproduction/<str:pk1>/<int:pk2>/<int:pk3>',get_production),
    path('ssold/<str:pk1>/<int:pk2>',get_monthlysold),
    path('jan-jul/',get_latesps),
    path('energy_data/<str:pk1>/<int:pk2>/<int:pk3>/',get_energy),
    path('energy_data/<int:pk3>/',get_energ),
]