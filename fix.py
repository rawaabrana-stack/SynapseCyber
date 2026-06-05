import re
with open('src/pages/Home.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

export_start = content.find('export default function')
react_content = content[export_start:]
react_content = "import { useEffect, useRef } from 'react';\n\n" + react_content

with open('src/pages/Home.jsx', 'w', encoding='utf-8') as f:
    f.write(react_content)
