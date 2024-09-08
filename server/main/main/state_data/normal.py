# import pandas as pd
# from sqlalchemy import create_engine

# # Load the CSV data into a DataFrame
# df = pd.read_csv("C:\\Users\\Nikhi\\Desktop\\server\\Data\\Data\\india-electrical-energy-sales-by-sector-statewise.csv")

# # Create a SQLAlchemy engine for MySQL
# # URL-encode the password to handle special characters like '@'
# # Example: '@' becomes '%40'
# engine = create_engine("mysql+mysqlconnector://root:Beast%40%405696@localhost:3306/main")

# # Insert data into the database
# df.to_sql('state_data_energy_sold', engine, if_exists='append', index=False)

# print("Data inserted successfully")


import pandas as pd
from sqlalchemy import create_engine, text

# Load the CSV data into a DataFrame
df = pd.read_csv("C:\\Users\\Nikhi\\Desktop\\server\\updated_data\\updated_data\\updated_india-electrical-energy-sales-by-sector-statewise.csv")

# Create a SQLAlchemy engine for MySQL
engine = create_engine("mysql+mysqlconnector://root:Beast%40%405696@localhost:3306/main")

# Clear the existing data in the table
with engine.connect() as connection:
    connection.execute(text("DELETE FROM state_data_energy_sold"))
    connection.commit()

# Insert new data into the database
df.to_sql('state_data_energy_sold', engine, if_exists='append', index=False)

print("Data updated successfully")
