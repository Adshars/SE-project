import json
import os

# Scieka do danych
DATA_FILE = os.path.join('data', 'Fixed', 'targets_fixed.json')

#Zaladowanie danych z pliku JSON
try:
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        DATA = json.load(f)
except Exception as e:
    print(f"❌ Blad ladowania danych z {DATA_FILE}: {e}")
    DATA = []

def search_person(first_name: str, last_name: str, birth_date: str = None):
    """
    Szukaj osoby w danych sankcyjnych.
    """
    resoults = []

    for entry in DATA:
        props = entry.get('properties', {})
        entry_first_names = props.get('firstName', [])
        entry_last_names = props.get('lastName', [])
        entry_birth_dates = props.get('birthDate', None)

        # Sprawdz, czy imie i nazwisko pasuja
        if (first_name in entry_first_names or first_name.lower in [n.lower() for n in entry_first_names]) and \
            (last_name in entry_last_names or last_name.lower in [n.lower() for n in entry_last_names]):
            # Sprawdz date urodzenia, jeśli podano
            if birth_date:
                if entry_birth_dates and birth_date in entry_birth_dates:
                    resoults.append(entry)
            else:
                resoults.append(entry)

        return resoults