from django.db import models

# Create your models here.
class Statewise_dailyusage(models.Model):
    States = models.CharField(max_length=40)
    Regions = models.CharField(max_length=50)
    latitude = models.DecimalField(max_digits=12, decimal_places=8)
    longitude = models.DecimalField(max_digits=12, decimal_places=8)
    Dates = models.CharField(max_length=25)
    Usage = models.DecimalField(max_digits=12, decimal_places=8)

class Statewise_monthlyproductio(models.Model):
    Country = models.CharField(max_length=15)
    Country_code = models.CharField(max_length=5)
    State = models.CharField(max_length=50)
    State_code = models.CharField(max_length=10)
    State_type = models.CharField(max_length=20)
    Date = models.CharField(max_length=50)
    Category = models.CharField(max_length=50)	
    Subcategory	= models.CharField(max_length=20)
    Variable = models.CharField(max_length=30)
    Unit = models.CharField(max_length=10)
    Value = models.CharField(max_length=20)

class Energy_Sold(models.Model):
    State = models.CharField(max_length=50)
    Year = models.CharField(max_length=7)
    Sector = models.CharField(max_length=20)
    Unit = models.CharField(max_length=10)
    Energy_Sold = models.CharField(max_length=50,null=True,blank=True)

class power_supp_jantojul(models.Model):
    Region = models.CharField(max_length=50)
    Peak_Demand_MW = models.IntegerField()
    Peak_Met_MW = models.IntegerField()
    Difference_MW = models.IntegerField()
    Difference_percent = models.IntegerField()
    Date = models.CharField(max_length=20)


class EnergyData(models.Model):
    state = models.CharField(max_length=255)
    date = models.CharField(max_length=100)
    population = models.PositiveIntegerField()
    gdp = models.CharField(max_length=20)  # GDP in trillions
    peak_demand_mw = models.CharField(max_length=20)
    peak_production_mw = models.CharField(max_length=20)
    solar_production_mw = models.CharField(max_length=20)
    coal_production_mw = models.CharField(max_length=20)
    wind_production_mw = models.CharField(max_length=20)
    nuclear_production_mw = models.CharField(max_length=20)
    total_production_mw = models.CharField(max_length=20)

