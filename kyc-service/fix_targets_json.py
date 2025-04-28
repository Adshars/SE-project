import os

# Ścieżki
input_file = os.path.join('Opensanctions', 'pl_mswia_sanctions', 'targets.nested.json')
output_dir = os.path.join('Data', 'Fixed')
output_file = os.path.join(output_dir, 'targets_fixed.json')

# Utwórz folder Fixed, jeśli nie istnieje
os.makedirs(output_dir, exist_ok=True)

# Odczytaj dane z pliku wejściowego
with open(input_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Usuń puste linie i przygotuj dane
lines = [line.strip() for line in lines if line.strip()]
fixed_lines = []

for i, line in enumerate(lines):
    # Dodaj przecinek na końcu każdej linii oprócz ostatniej
    if not line.endswith(',') and i != len(lines) - 1:
        fixed_lines.append(line + ',')
    else:
        fixed_lines.append(line)

# Zapisz dane do poprawionego pliku
with open(output_file, 'w', encoding='utf-8') as f:
    f.write('[\n')
    f.write('\n'.join(fixed_lines))
    f.write('\n]')

print(f"✅ Plik naprawiony! Zapisano w {output_file}")
