## Dane sankcyjne

Ten projekt wykorzystuje dane pochodzące z projektu [OpenSanctions](https://github.com/opensanctions/opensanctions).

Aby korzystać z danych:
1. Sklonuj repozytorium OpenSanctions:
    ```bash
    git clone https://github.com/opensanctions/opensanctions.git
    ```
2. Wygeneruj lokalną bazę danych sankcyjnych:
    ```bash
    cd opensanctions
    docker compose run --rm app zavod crawl datasets/default
    ```
3. Skopiuj wygenerowane dane do katalogu `sanctions-service/data/` Twojego projektu.

**Uwaga:** Nie kopiujemy całego kodu opensanctions do projektu, zgodnie z zasadami licencji MIT.
# SE-project