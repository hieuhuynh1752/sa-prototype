import paho.mqtt.client as paho
import time
import random
import csv
from datetime import datetime

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

# Function to decrypt person detected
def decrypt_person(encrypted_string):
    decryption_map = {
        "3bc51062": "Rafi",
        "cd9fb1e1": "Hieu",
        "6e81b125": "Aleksa",
        "b554d1a6": "Lorenzo"
    }
    return decryption_map.get(encrypted_string, "Unknown")

# Read and publish data from CSV
try:
    with open(csv_file_path, mode='r', encoding='utf-8') as file:
        csv_reader = csv.reader(file)
        next(csv_reader)  # Skip header row if there is one
        for row in csv_reader:
            time.sleep(random.randint(1, 5))  # Random delay between messages
            
            # Decrypt person detected
            persons_detected = eval(row[2])
            decrypted_persons = [decrypt_person(person) for person in persons_detected]
            
            data_map = {
                "Timestamp": row[0],
                "Room": row[1],
                "Person Detected": decrypted_persons,
                "Detected Activities": eval(row[3])
            }

            data_map_string = str(data_map)
            ret = client.publish("/smart_home_data", data_map_string.encode())
            time.sleep(5)

except IOError as e:
    print("An error occurred:", e)

print("stopped")
