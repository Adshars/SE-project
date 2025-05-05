[ External Client / User ]
        ↓ (POST /login - email, password)
[ API Gateway ]
        ↓ (przekazanie danych)
[ Auth Service ]
        ↑ (token JWT)
[ API Gateway ]
        ↑ (token JWT)
[ External Client / User ]

(Drugi request)

[ External Client / User ]
        ↓ (POST /sanctions - token JWT + dane osoby)
[ API Gateway ]
    ↓ (sprawdzenie tokena JWT lokalnie)
        ↓ (przekazanie danych osoby)
[ kyc-service ]
        ↑ (wynik sprawdzenia osoby)
[ API Gateway ]
        ↑ (wynik sprawdzenia osoby)
[ External Client / User ]
