from django.shortcuts import render
from .models import Statewise_dailyusage,Statewise_monthlyproductio,Energy_Sold,power_supp_jantojul,EnergyData
from .serializer import SDailyUsageSerializer,SMonthly_ProductionSerializer,Energy_Sold_Serializer,Power_Supp_JAN_TO_JUL,new_Energy
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

@api_view(['GET'])
def get_usage(request,pk1,pk2,pk3):
    user_data = Statewise_dailyusage.objects.filter(States = pk1.title())
    li = []
    for i in user_data:
        if(int(i.Dates[3:5]) == pk2 and int(i.Dates[6:10]) == pk3):
            li.append(i)
    serialized_data = SDailyUsageSerializer(li,many = True)
    return Response(serialized_data.data)

@api_view(['GET'])
def get_production(request,pk1,pk2,pk3):
    user_data = Statewise_monthlyproductio.objects.filter(State = pk1.title())
    li = []
    for i in user_data:
        m = len(i.Date)
        if(m == 8):
            if(int(i.Date[2]) == pk2 and int(i.Date[4:]) == pk3):
                li.append(i)
        else:
            if(int(i.Date[2:4]) == pk2 and int(i.Date[5:]) == pk3):
                li.append(i)
            

    serialized_data = SMonthly_ProductionSerializer(li,many = True)
    return Response(serialized_data.data)

@api_view(['GET'])
def get_monthlysold(request,pk1,pk2):
    user_data = Energy_Sold.objects.filter(State = pk1.title())
    li = []
    for i in user_data:
        if(int(i.Year[0:4]) == pk2):
            li.append(i)
    serialized_data = Energy_Sold_Serializer(li,many = True)
    return Response(serialized_data.data)

@api_view(['GET'])
def get_latesps(request):
    user_data = power_supp_jantojul.objects.all()
    serialized_data = Power_Supp_JAN_TO_JUL(user_data,many = True)
    return Response(serialized_data.data)

@api_view(['GET'])
def get_energy(request,pk1,pk2,pk3):
    user_data = EnergyData.objects.filter(state = pk1.title())
    li = []
    for i in user_data:
        if(int(i.date[3:5]) == pk2 and int(i.date[6:10]) == pk3):
            li.append(i)
    serialized_data = new_Energy(li,many = True)
    return Response(serialized_data.data)

@api_view(['GET'])
def get_energ(request,pk3):
    # user_data = EnergyData.objects.filter(state = pk1.title())
    li = []
    for i in EnergyData.objects.all():
        if(int(i.date[6:10]) == pk3 and int(i.date[3:5]) == 1):
            li.append(i)
    serialized_data = new_Energy(li,many = True)
    return Response(serialized_data.data)