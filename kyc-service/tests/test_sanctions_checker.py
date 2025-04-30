import os
import json
import pytest
from app.sanctions_checker import search_person

# Przygotowanie danych testowych JSON z 2 wpisami

TEST_DATA = [
    {
        "properties": {
            "firstName": ["Tatsiana"],
            "lastName": ["ABEL"],
            "birthDate": ["1964-03-18"]
        }
    },
    {
        "properties": {
            "firstName": ["Adam"],
            "lastName": ["Węglewski"],
            # brak daty urodzenia
        }
    }
]

# Fixture zastępująca dane w checkerze
@pytest.fixture(autouse=True)
def patch_data(monkeypatch):
    monkeypatch.setattr('app.sanctions_checker.DATA', TEST_DATA)

def test_found_with_birth_date():
    resoults = search_person("Tatsiana", "ABEL", "1964-03-18")
    assert len(resoults) == 1
    assert resoults[0]["properties"]["lastName"][0] == "ABEL"

def test_found_without_birth_date():
    resoults = search_person("Tetsiana", "ABEL")
    assert len(resoults) == 1
    assert resoults[0]["properties"]["lastName"][0] == "ABEL"

def test_not_found():
    resoults = search_person("Adam", "Węglewski", "1990-01-01")
    assert len(resoults) == 0

