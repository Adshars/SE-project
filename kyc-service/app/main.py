from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from app.sanctions_checker import search_person

app = FastAPI()

class PersonQuery(BaseModel):
    first_name: str
    last_name: str
    birth_date: str | None = None

@app.post("/search")
def check_sanctions(person: PersonQuery):
    """
    Endpoint do sprawdzania sankcji dla danej osoby.
    """
    maches = search_person(querty.first_name, querty.last_name, querty.birth_date)

    if maches:
        return {
            "found": True,
            "count": len(maches),
            "results": maches
        }
    else:
        return {
            "found": False,
            "count": 0,
            "results": []
        }