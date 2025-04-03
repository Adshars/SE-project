# Czym są mikroserwisy?

Mikroserwisy to styl architektury, który polega na podzieleniu aplikacji na wiele mniejszych, niezależnych usług.

Każdy mikroserwis odpowiada za konkretną funkcjonalność – np. autoryzację użytkownika, przetwarzanie płatności czy wysyłanie powiadomień. Usługi komunikują się ze sobą za pomocą standardowych protokołów, takich jak **HTTP** czy **gRPC**.

W przeciwieństwie do **monolitu**, mikroserwisy oferują większą elastyczność i lepsze dopasowanie do nowoczesnych potrzeb biznesowych. Ułatwiają rozwój, wdrażanie i skalowanie.

> Mikroserwisy to fundament nowoczesnych aplikacji – elastycznych, skalowalnych i łatwych do utrzymania.

---

# Dlaczego mikroserwisy?

**Główne zalety:**

- **Skalowalność** – można skalować tylko najbardziej obciążone fragmenty aplikacji.
- **Niezależność wdrożeń** – każdy mikroserwis można aktualizować osobno.
- **Łatwiejsze utrzymanie** – mniejsze, wyspecjalizowane moduły.
- **Równoległa praca zespołów** – niezależne zespoły mogą pracować nad własnymi usługami.
- **Swoboda technologiczna** – różne mikroserwisy mogą być pisane w różnych językach.

**Wyzwania:**

- Większa złożoność architektury.
- Konieczność dobrej organizacji i odpowiednich narzędzi.

---

# JavaScript i Node.js

JavaScript to nie tylko język do stron internetowych. Dzięki **Node.js** można używać go także po stronie serwera.

**Node.js**:

- Zbudowany na silniku V8 (Google Chrome).
- Pozwala uruchamiać JavaScript na serwerze.
- Obsługuje wiele jednoczesnych zapytań dzięki event loop i modelowi asynchronicznemu.
- Świetnie sprawdza się w mikroserwisach i aplikacjach czasu rzeczywistego.

---

# Node.js do mikroserwisów

Dlaczego Node.js to dobry wybór dla architektury mikroserwisowej?

- **Szybki i lekki** – idealny do wielu instancji (np. w Dockerze).
- **Non-blocking I/O + event loop** – obsługa wielu zapytań bez wielu wątków.
- **Natywny JSON** – ułatwia komunikację między usługami.
- **Jeden język w całym stacku** – prostsza praca zespołów.

---

# Frameworki dla mikroserwisów

## 🔹 Express.js
- Lekki, szybki, idealny na początek.
- Duża społeczność, mnóstwo zasobów.

## 🔹 NestJS
- Oparty na TypeScript.
- Gotowy pod mikroserwisy: komunikacja, eventy, testy, logowanie.

## 🔹 Fastify
- Bardzo szybki i wydajny.
- Niski narzut – dobry dla wydajnych mikroserwisów.

## 🔹 Moleculer
- Zaprojektowany specjalnie pod mikroserwisy.
- Obsługuje m.in. load balancing, discovery, kolejki zadań, cache.
- Działa w klastrach, gotowy na produkcję.

---

# Komunikacja między mikroserwisami

## 📡 Typowe metody komunikacji:

- **REST API** – popularny, prosty, dobrze znany.
- **GraphQL** – elastyczny, szczególnie dla front-endu.
- **Kolejki wiadomości (RabbitMQ, Kafka)** – asynchroniczność i większa odporność.
- **WebSockety** – komunikacja w czasie rzeczywistym (czaty, powiadomienia).

Node.js wspiera wszystkie te metody – dzięki bogatemu ekosystemowi bibliotek.

---

# Skalowalność w Node.js

**Node.js** świetnie się skaluje:

- Obsługuje tysiące zapytań dzięki event loopowi.
- Wbudowany **moduł `cluster`** pozwala uruchomić wiele procesów na różnych rdzeniach CPU.
- Doskonale współpracuje z **Dockerem**, **Kubernetesem** i chmurami: **AWS**, **Google Cloud**, **Azure**.
- Możliwość budowania aplikacji **serverless**.

---

# Wyzwania

Nie wszystko jest idealne – warto znać ograniczenia:

- **Słabe strony Node.js w zadaniach CPU-intensywnych** (np. szyfrowanie, obrazowanie).
- **Złożona asynchroniczność** może utrudniać debugowanie.
- **Złożoność komunikacji** między wieloma usługami – potrzebna dobra dokumentacja, monitoring i testy.

---

# Przykłady firm używających Node.js w mikroserwisach

✅ **Netflix** – Node.js do API i streamingu danych.  
✅ **PayPal** – przejście z Javy na Node.js, poprawa wydajności.  
✅ **Uber** – dynamiczne backendy oparte na Node.js.  
✅ **LinkedIn** – Node.js w mobilnym backendzie.

> Wspólny mianownik? Duża skala, szybkość, mikroserwisy i JavaScript.

---

# Podsumowanie

✅ Mikroserwisy = skalowalne, elastyczne i niezależne systemy.  
✅ Node.js + JavaScript = szybki, prosty, nowoczesny stack.  
✅ Technologia sprawdzona przez największe firmy.  
✅ Trzeba jednak pamiętać o wyzwaniach: CPU, złożoność, asynchroniczność.

JavaScript to dziś pełnoprawna technologia backendowa – gotowa na poważne wyzwania w architekturze mikroserwisowej.

---
