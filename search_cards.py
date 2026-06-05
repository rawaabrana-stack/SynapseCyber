import sys

with open('src/pages/Home.jsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'Read more' in line or 'href=' in line or 'AI & LLM' in line or 'Penetration Testing' in line:
        print(f"{i+1}: {line.strip()}")
