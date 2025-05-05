
1. Charakterystyka oprogramowania

a. Nazwa skrócona
KYB Gateway

b. Nazwa pełna
System weryfikacji podmiotów i osób fizycznych dla instytucji finansowych oparty o mikroserwisy i OpenSanctions

c. Krótki opis ze wskazaniem celów
System umożliwia instytucjom finansowym przeprowadzenie podstawowej weryfikacji kontrahentów lub osób fizycznych pod kątem występowania na listach sankcyjnych lub jako osoby eksponowane politycznie (PEP). Użytkownik loguje się do systemu i otrzymuje dostęp do panelu organizacji, w którym może wprowadzać dane osób (imię, nazwisko, data urodzenia) w celu ich sprawdzenia. System komunikuje się z mikroserwisem OpenSanctions w celu wyszukiwania danych w dostępnych źródłach list sankcyjnych.

Głównym celem projektu jest zapewnienie:
- bezpiecznego i elastycznego sposobu zarządzania dostępem (autoryzacja i uwierzytelnienie użytkowników),
- uproszczonej integracji z zewnętrznymi systemami za pomocą API Gateway,
- modułowej architektury opartej na mikroserwisach, umożliwiającej skalowanie i rozbudowę,
- zgodności z wymaganiami audytowymi (logowanie zapytań, podział organizacyjny użytkowników).

2. Prawa autorskie

a. Autorzy
- Adam Węglewski
- Patryk Tarmasewicz

b. Warunki licencyjne do oprogramowania wytworzonego przez grupę
Projekt udostępniony zostanie na licencji MIT, umożliwiającej dowolne wykorzystanie, modyfikację i dystrybucję, pod warunkiem zachowania informacji o autorach i oryginalnej licencji. Części składowe projektu wykorzystujące zewnętrzne komponenty (np. OpenSanctions) przestrzegają oryginalnych licencji przypisanych do tych komponentów.

3. Specyfikacja wymagań

Id: F1
Nazwa: Rejestracja użytkownika
Opis: Użytkownik może utworzyć konto w systemie, podając dane logowania.
Priorytet: 1
Kategoria: Funkcjonalne

Id: F2
Nazwa: Logowanie i uwierzytelnianie
Opis: System umożliwia logowanie i zwraca token JWT po poprawnym logowaniu.
Priorytet: 1
Kategoria: Funkcjonalne

Id: F3
Nazwa: Powiązanie z organizacją
Opis: Każdy użytkownik należy do jednej organizacji, która grupuje jego działania.
Priorytet: 1
Kategoria: Funkcjonalne

Id: F4
Nazwa: Wprowadzenie danych osoby
Opis: Użytkownik może wprowadzić imię, nazwisko i datę urodzenia osoby do sprawdzenia.
Priorytet: 1
Kategoria: Funkcjonalne

Id: F5
Nazwa: Weryfikacja osoby w kyc-service
Opis: System odpyta serwis kyc-service i zwróci informację o wyniku wyszukiwania. 
Priorytet: 1
Kategoria: Funkcjonalne

Id: F6
Nazwa: Historia zapytań
Opis: Użytkownik może przeglądać historię zapytań wykonanych przez jego organizację.
Priorytet: 2
Kategoria: Funkcjonalne

Id: F7
Nazwa: API dla integracji zewnętrznych
Opis: API Gateway udostępnia możliwość integracji z systemami zewnętrznymi.
Priorytet: 2
Kategoria: Funkcjonalne

Id: F8
Nazwa: Logowanie operacji (audyt)
Opis: Wszystkie zapytania są logowane dla celów zgodności i audytu.
Priorytet: 2
Kategoria: Funkcjonalne

Id: NF1
Nazwa: Bezpieczeństwo JWT
Opis: Wszystkie zapytania wymagają poprawnej autoryzacji tokenem JWT.
Priorytet: 1
Kategoria: Pozafunkcjonalne

Id: NF2
Nazwa: Wydajność mikroserwisów
Opis: Mikroserwisy muszą obsłużyć jednocześnie wielu użytkowników.
Priorytet: 2
Kategoria: Pozafunkcjonalne

Id: NF3
Nazwa: Skalowalność
Opis: Architektura powinna umożliwiać łatwe dodawanie nowych usług.
Priorytet: 3
Kategoria: Pozafunkcjonalne

Id: NF4
Nazwa: Obsługa błędów
Opis: System informuje o błędach użytkownika i problemach serwera.
Priorytet: 2
Kategoria: Pozafunkcjonalne

4. Architektura systemu / oprogramowania

a. Architektura rozwoju – stos technologiczny (development stack)

Nazwa: Node.js
Przeznaczenie: Backend API Gateway, Auth Service, User/Organization Service
Wersja: 22.14.0

Nazwa: Express.js
Przeznaczenie: Framework HTTP dla mikroserwisów Node.js
Wersja: 4.x

Nazwa: Python
Przeznaczenie: Wrapper do OpenSanctions, mikroserwis weryfikacji
Wersja: 3.13.3

Nazwa: FastAPI
Przeznaczenie: Lekki framework do budowy REST API w Pythonie
Wersja: 0.110+

Nazwa: React
Przeznaczenie: Frontend aplikacji
Wersja: 18.x

Nazwa: Tailwind CSS
Przeznaczenie: Stylowanie interfejsu frontendowego
Wersja: 3.x

Nazwa: MongoDB
Przeznaczenie: Przechowywanie danych użytkowników, logów, tokenów
Wersja: 6.x

Nazwa: PostgreSQL
Przeznaczenie: Relacyjne dane organizacji i historii zapytań
Wersja: 15.x

Nazwa: Docker
Przeznaczenie: Konteneryzacja mikroserwisów
Wersja: 24.x

Nazwa: GitHub Actions
Przeznaczenie: Automatyzacja CI/CD
Wersja: najnowsza

b. Architektura uruchomieniowa – stos technologiczny (runtime stack)

Nazwa: Docker Compose
Przeznaczenie: Orkiestracja i uruchamianie kontenerów w środowisku lokalnym
Wersja: 2.x

Nazwa: Node.js
Przeznaczenie: Uruchamianie backendowych mikroserwisów
Wersja: 22.14.0

Nazwa: Python
Przeznaczenie: Uruchamianie wrappera OpenSanctions
Wersja: 3.13.3

Nazwa: MongoDB
Przeznaczenie: Baza danych użytkowników i logów
Wersja: 6.x

Nazwa: PostgreSQL
Przeznaczenie: Przechowywanie historii zapytań, danych organizacyjnych
Wersja: 15.x

Nazwa: OpenSanctions
Przeznaczenie: Źródło danych sankcyjnych i PEP
Wersja: najnowsza (2024)

5. Testy

a. Scenariusze testów

Test ID: T1
Opis: Rejestracja nowego użytkownika
Kroki:
  1. Przejdź do strony rejestracji.
  2. Wprowadź unikalny adres e-mail, hasło i nazwę organizacji.
  3. Kliknij „Zarejestruj”.
Oczekiwany rezultat: Konto zostaje utworzone, użytkownik otrzymuje potwierdzenie.

Test ID: T2
Opis: Logowanie i pobranie tokenu JWT
Kroki:
  1. Przejdź do strony logowania.
  2. Wprowadź poprawne dane logowania.
  3. Kliknij „Zaloguj”.
Oczekiwany rezultat: Zwrócony zostaje token JWT do dalszych zapytań.

Test ID: T3
Opis: Wprowadzenie danych osoby do weryfikacji
Kroki:
  1. Po zalogowaniu się, otwórz formularz weryfikacji.
  2. Wprowadź imię, nazwisko, datę urodzenia.
  3. Kliknij „Sprawdź”.
Oczekiwany rezultat: System przekazuje dane do mikroserwisu OpenSanctions.

Test ID: T4
Opis: Otrzymanie wyniku z mikroserwisu kyc-service
Kroki:
  1. Wysłane zapytanie z danymi osoby.
  2. Mikroserwis odpytuje lokalną lub zdalną bazę opensanctions.
  3. Zwraca wynik dopasowania.
Oczekiwany rezultat: Użytkownik otrzymuje informację, czy osoba znajduje się na liście sankcyjnej/PEP.

Test ID: T5
Opis: Historia zapytań organizacji
Kroki:
  1. Zaloguj się jako użytkownik przypisany do organizacji.
  2. Przejdź do sekcji „Historia”.
  3. Sprawdź listę zapytań z ostatnich dni.
Oczekiwany rezultat: Wyświetlona lista zapytań z datą, statusem i osobą.

Test ID: T6
Opis: Brak autoryzacji
Kroki:
  1. Spróbuj wykonać zapytanie do API bez tokenu JWT.
Oczekiwany rezultat: Zwrócony status HTTP 401 Unauthorized.

Test ID: T7
Opis: Integracja z API przez zewnętrzny system
Kroki:
  1. Wysłanie poprawnego zapytania z zewnętrznego systemu z tokenem.
  2. Przekazanie danych osoby do API Gateway.
Oczekiwany rezultat: Wynik jak dla użytkownika z aplikacji frontendowej.

b. Sprawozdanie z wykonania scenariuszy testów
Wszystkie scenariusze testowe zostały uruchomione w środowisku lokalnym z użyciem narzędzia Postman (dla backendu). Testy T1–T4 oraz T6 zakończyły się pomyślnie. Scenariusze T5 i T7 wymagają jeszcze implementacji historii i publicznego API, które są planowane na kolejne etapy rozwoju projektu.
