import requests

k= requests.get("http://localhost:8000/api/susage/odisha/1/2020").json()

print(k)