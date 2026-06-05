import re

with open('src/pages/Home.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

services_section = content[content.find('id="services"'):content.find('id="industries"')]
h3_matches = re.findall(r'<h3>(.*?)</h3>', services_section)
for h3 in h3_matches:
    print(h3)
