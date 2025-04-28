import json
import os

# Załaduj dane sankcyjne przy starcie serwisu
DATA_FILE = "/app/data/entities.json"  # Ścieżka do danych sankcyjnych
SANCTIONS_DATA = []

if os.path.exists(DATA_FILE):
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        SANCTIONS_DATA = json.load(f)

def check_person(name, dob=None):
    for entity in SANCTIONS_DATA:
        entity_name = entity.get("name", "").lower()
        if name.lower() in entity_name:
            if dob:
                # Jeśli podano datę urodzenia, sprawdzaj także ją
                entity_dob = entity.get("birthDate")
                if entity_dob and dob in entity_dob:
                    return entity
            else:
                return entity
    return None
