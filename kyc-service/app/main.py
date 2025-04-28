from fastapi import FastAPI, HTTPException, Header, Request
from app.sanctions_checker import check_person

app = FastAPI()

@app.post("/check")
async def check(request: Request):
    data = await request.json()
    name = data.get("name")
    dob = data.get("dob")

    if not name:
        raise HTTPException(status_code=400, detail="Name is required")

    result = check_person(name, dob)

    if result:
        return {"match": True, "details": result}
    else:
        raise HTTPException(status_code=404, detail="Person not found")