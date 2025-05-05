SE-project

🧾 Opis projektu

SE-project to system oparty na mikroserwisach dla instytucji finansowych, który umożliwia automatyczne sprawdzanie kontrahentów lub klientów pod kątem występowania na listach sankcyjnych oraz PEP (Politically Exposed Persons). System zawiera funkcje uwierzytelniania, zarządzania organizacjami, zapytań KYC oraz integracji z OpenSanctions.

🧱 Architektura

Projekt zbudowany jest z czterech głównych mikroserwisów:

auth-service: Uwierzytelnianie użytkowników i przypisywanie ich do organizacji.

api-gateway: Brama API przekierowująca żądania do odpowiednich mikroserwisów.

opensanctions-ms: Serwis do pobierania i utrzymywania danych z OpenSanctions.

kyc-service: Zarządzanie zapytaniami KYC; obsługuje zapytania do danych pobranych przez opensanctions-ms.

🚀 Technologie i wersje

🔐 auth-service

Język: JavaScript (Node.js v18+)

Framework: Express.js

Baza danych: MongoDB (Mongoose)

Bezpieczeństwo: JWT, bcrypt

🌐 api-gateway

Język: JavaScript (Node.js v18+)

Framework: Express.js

Middleware: http-proxy-middleware, JWT

📊 opensanctions-ms

Ten projekt wykorzystuje dane pochodzące z projektu OpenSanctions.

Aby korzystać z danych:

Sklonuj repozytorium OpenSanctions:

git clone https://github.com/opensanctions/opensanctions.git

Wygeneruj lokalną bazę danych sankcyjnych:

cd opensanctions
docker compose run --rm app zavod crawl datasets/default

Skopiuj wygenerowane dane do katalogu sanctions-service/data/ Twojego projektu.

Uwaga: Nie kopiujemy całego kodu OpenSanctions do projektu – należy przestrzegać zasad licencji MIT.

🧾 kyc-service

Tworzenie i przechowywanie zapytań KYC

Przeszukiwanie danych pobranych przez opensanctions-ms

Endpointy:

POST /kyc/check

🔐 Zmienne środowiskowe

Każdy serwis wymaga własnych zmiennych, np.:

JWT_SECRET

MONGO_URI

OPENSANCTIONS_API_KEY

AUTH_SERVICE_URL, KYC_SERVICE_URL, itd.

📁 Struktura katalogów

auth-service/

api-gateway/

opensanctions-ms/

kyc-service/

docker-compose.yml

📝 Licencja

Ten projekt objęty jest licencją MIT. Szczegóły w LICENSE.md.