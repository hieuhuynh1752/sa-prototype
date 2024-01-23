import paho.mqtt.client as paho
import time
import random
import csv
from datetime import datetime
import string

# hostname
broker = "test.mosquitto.org"
# port
port = 1883

def on_publish(client, userdata, result):
    print("Device 1 : Data published.")
    pass

client = paho.Client("admin")
client.on_publish = on_publish
client.connect(broker, port)

# Path to the CSV file
csv_file_path = 'data/SmartHome.csv'
delimiter = ','

def generate_unique_random_string(exclude_strings, length=8):
    # Characters that can be used to generate a string
    chars = string.ascii_lowercase + string.digits
    while True:
        random_string = ''.join(random.choice(chars) for _ in range(length))
        if random_string not in exclude_strings:
            return random_string

# List of strings to exclude
excluded_strings = ["3bc51062", "cd9fb1e1", "6e81b125", "b554d1a6"]

# Function to encrypt person detected
def encrypt_person(encrypted_string):
    encryption_map = {
        "Rafi": "3bc51062",
        "Hieu": "cd9fb1e1",
        "Aleksa": "6e81b125",
        "Lorenzo": "b554d1a6"
    }
    return encryption_map.get(encrypted_string, generate_unique_random_string(excluded_strings))

# Read and publish data from CSV
try:
    with open(csv_file_path, mode='r', encoding='utf-8') as file:
        csv_reader = csv.reader(file)
        next(csv_reader)  # Skip header row if there is one
        for row in csv_reader:
            time.sleep(random.randint(1, 5))  # Random delay between messages
            
            # encrypt person detected
            persons_detected = eval(row[2])
            encrypted_persons = [encrypt_person(person) for person in persons_detected]
            
            data_map = {
                "Timestamp": row[0],
                "Room": row[1],
                "Person Detected": encrypted_persons,
                "Detected Activities": eval(row[3])
            }

            data_map_string = str(data_map)
            ret = client.publish("/smart_home_data", data_map_string.encode())
            time.sleep(5)

except IOError as e:
    print("An error occurred:", e)

print("stopped")
