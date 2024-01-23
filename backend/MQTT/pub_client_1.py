import paho.mqtt.client as paho
import time
import random
import csv
from datetime import datetime
import string
import json

# hostname
broker = "test.mosquitto.org"
# port
port = 1883

def on_publish(client, userdata, result):
    print("Data published.")
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
excluded_strings = ["3bc51062", "cd9fb1e1", "6e81b125", "b554d1a6", "a2f4g6h8", "b3c5d7e","k1l3m5n7","p2q4r6s8","t1u3v5w7","x2y4z6a",]


# Function to encrypt person detected
def encrypt_person(person):
    encryption_map = {
        "Rafi": "3bc51062",
        "Hieu": "cd9fb1e1",
        "Aleksa": "6e81b125",
        "Lorenzo": "b554d1a6"
    }
    return encryption_map.get(person, generate_unique_random_string(excluded_strings))

# Function to encrypt activities
def encrypt_activities(activities):
    encryption_map = {
        "reading": "a2f4g6h8",
        "playing": "b3c5d7e",
        "relaxing": "k1l3m5n7",
        "sleeping": "p2q4r6s8",
        "eating": "t1u3v5w7",
        "cooking": "x2y4z6a",
    }
    return [encryption_map.get(activity, generate_unique_random_string(excluded_strings)) for activity in activities]

# Read and publish data from CSV
try:
    with open(csv_file_path, mode='r', encoding='utf-8') as file:
        csv_reader = csv.reader(file)
        next(csv_reader)  # Skip header row if there is one
        for row in csv_reader:
            time.sleep(random.randint(1, 5))  # Random delay between messages
            
            # Encrypt person detected and activities
            persons_detected = eval(row[2])
            detected_activities = eval(row[3])
            
            encrypted_persons = [encrypt_person(person) for person in persons_detected]
            encrypted_activities = encrypt_activities(detected_activities)
            
            data_map = {
                "timestamp": str(row[0]),
                "room": str(row[1]),
                "person_detected": str(encrypted_persons),
                "detected_activities": str(encrypted_activities)
            }

            # data_map_string = str(data_map)
            data_map_string = json.dumps(data_map)
            ret = client.publish("/smart_home_data", data_map_string.encode())
            time.sleep(5)

except IOError as e:
    print("An error occurred:", e)

print("stopped")