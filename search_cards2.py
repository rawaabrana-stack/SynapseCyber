import re

with open('src/pages/Home.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find occurrences of Penetration Testing and print the surrounding 500 characters
matches = re.finditer(r'Penetration Testing', content)
for m in matches:
    start = max(0, m.start() - 200)
    end = min(len(content), m.end() + 500)
    print("--- MATCH ---")
    print(content[start:end].encode('ascii', 'ignore').decode('ascii'))
