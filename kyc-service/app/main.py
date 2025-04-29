from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from app.sanctions_checker import search_person

app = FastAPI()

class PersonQuery(BaseModel):
    first_name: str
    last_name: str
    birth_date: str | None = None

@app.post("/search")
def check_sanctions(query: PersonQuery):
    """
    Endpoint do sprawdzania sankcji dla danej osoby.
    """
    matches = search_person(query.first_name, query.last_name, query.birth_date)

    if matches:
        return {
            "found": True,
            "count": len(matches),
            "results": matches
        }
    else:
        return {
            "found": False,
            "count": 0,
            "results": []
        }