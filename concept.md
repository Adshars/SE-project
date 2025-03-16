JavaScript jako technologia backendowa
1. Wstęp
JavaScript początkowo był językiem frontendowym, ale dzięki Node.js może działać także po stronie serwera.
Jest wydajny, szybki i ma bogaty ekosystem pakietów NPM.

2. Node.js – fundament backendowego JavaScriptu
Node.js to środowisko uruchomieniowe dla JavaScriptu poza przeglądarką.
Działa na silniku V8 i obsługuje model event-driven oraz non-blocking I/O.

Przykład prostego serwera w Node.js:
javascript
Kopiuj
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, backend JS!");
});

server.listen(3000, () => {
    console.log("Serwer działa na http://localhost:3000");
});
3. Popularne frameworki backendowe
Express.js – lekki i elastyczny framework do budowy API
NestJS – oparty na TypeScript, strukturalny framework dla dużych aplikacji
Fastify – szybka alternatywa dla Express.js
Przykład backendu w Express.js:
javascript
Kopiuj
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Witaj w backendowym JavaScript!");
});

app.listen(3000, () => console.log("Serwer działa na porcie 3000"));
4. JavaScript vs inne technologie backendowe
Cecha	Node.js	Python (Django/Flask)	PHP (Laravel)
Wydajność	Wysoka	Średnia	Średnia
Ekosystem	Bardzo duży	Duży	Duży
Zastosowania	API, mikroserwisy, aplikacje real-time	AI, ML, analityka	Strony WWW, CMS
5. Kiedy warto używać backendowego JavaScriptu?
✅ Aplikacje w czasie rzeczywistym (czaty, streaming)
✅ API i mikroserwisy
✅ Projekty wymagające spójności językowej frontend-backend

Nie jest najlepszym wyborem dla:
❌ Zaawansowanych obliczeń AI
❌ Aplikacji wymagających dużej precyzji w obliczeniach numerycznych

6. Podsumowanie
JavaScript to potężne narzędzie backendowe dzięki Node.js.
Jest szybki, wydajny i ma duży ekosystem, ale nie zawsze jest najlepszym wyborem.

