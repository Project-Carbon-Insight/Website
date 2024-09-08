from rest_framework import serializers
from .models import Statewise_dailyusage,Statewise_monthlyproductio,Energy_Sold,power_supp_jantojul,EnergyData

class SDailyUsageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Statewise_dailyusage
        fields = '__all__'
class SMonthly_ProductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Statewise_monthlyproductio
        fields = ['State','State_code','State_type','Date','Variable','Unit','Value']
class Energy_Sold_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Energy_Sold
        fields = '__all__'
class Power_Supp_JAN_TO_JUL(serializers.ModelSerializer):
    class Meta:
        model = power_supp_jantojul
        fields = ['Region','Peak_Demand_MW','Peak_Met_MW','Difference_MW','Difference_percent','Date']
class new_Energy(serializers.ModelSerializer):
    class Meta:
        model = EnergyData
        fields = "__all__"  