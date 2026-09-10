#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Convert markdown to PDF using WeasyPrint."""

import sys
import re
from pathlib import Path

try:
    import markdown_it
    from weasyprint import HTML, CSS
except ImportError:
    print("ERROR: Install required packages: pip install markdown-it-py weasyprint")
    sys.exit(1)

# Read the markdown file
md_path = Path("E:/Gokturkce_kursu/Gokturkce_Kurs_Teklifi_Revize.md")
pdf_path = Path("E:/Gokturkce_kursu/Gokturkce_Kurs_Teklifi_Revize.pdf")
html_path = Path("E:/Gokturkce_kursu/output.html")

md_content = md_path.read_text(encoding="utf-8")

# Initialize markdown parser
md = markdown_it.MarkdownIt()

# Parse markdown to HTML
html_body = md.render(md_content)

# Read the template
template_path = Path("C:/Users/pc/.minimax/.builtin-skills/pdf/templates/reformat-default/skeleton.html")
if template_path.exists():
    template = template_path.read_text(encoding="utf-8")
    # Replace placeholders
    template = template.replace("<!-- TITLE -->", "Göktürkçe Okuma-Yazma Öğreneği")
    template = template.replace("<!-- SUBTITLE -->", "Ahmet Yesevi Vakfı Eğitim Faaliyeti Proje Teklifi (Revize)")
    template = template.replace("<!-- AUTHOR -->", "İbrahim (Bayram) BİLİR")
    template = template.replace("<!-- DATE -->", "08.09.2026")
    template = template.replace("<!-- ACCENT -->", "#1e3a5f")
    template = template.replace("<!-- BODY_HTML -->", html_body)
    full_html = template
else:
    # Fallback: create standalone HTML
    full_html = f"""<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Göktürkçe Okuma-Yazma Öğreneği - Revize Teklif</title>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Old+Turkic&display=swap');
    body {{
        font-family: 'Segoe UI', 'Calibri', Arial, sans-serif;
        font-size: 11pt;
        line-height: 1.6;
        max-width: 800px;
        margin: 0 auto;
        padding: 2cm;
        color: #333;
    }}
    h1 {{
        color: #1e3a5f;
        font-size: 18pt;
        border-bottom: 2px solid #1e3a5f;
        padding-bottom: 10px;
    }}
    h2 {{
        color: #1e3a5f;
        font-size: 14pt;
        margin-top: 24pt;
        border-left: 4px solid #1e3a5f;
        padding-left: 10px;
    }}
    h3 {{ color: #2a4a6f; font-size: 12pt; margin-top: 16pt; }}
    table {{
        border-collapse: collapse;
        width: 100%;
        margin: 12pt 0;
    }}
    th, td {{
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }}
    th {{
        background-color: #1e3a5f;
        color: white;
    }}
    tr:nth-child(even) {{
        background-color: #f9f9f9;
    }}
    hr {{
        border: none;
        border-top: 1px solid #ddd;
        margin: 20pt 0;
    }}
    strong {{ color: #1e3a5f; }}
    .signature-block {{
        margin-top: 40pt;
        padding: 20pt;
        border: 1px solid #ddd;
        background-color: #f9f9f9;
    }}
    .protocol {{
        background-color: #f5f5f5;
        padding: 20pt;
        margin: 20pt 0;
        border-radius: 5px;
    }}
    .tamga {{
        font-family: 'Noto Sans Old Turkic', sans-serif;
        font-size: 14pt;
    }}
    @page {{
        size: A4;
        margin: 2cm;
    }}
</style>
</head>
<body>
{html_body}
</body>
</html>"""

# Save HTML for debugging
html_path.write_text(full_html, encoding="utf-8")
print(f"HTML saved to: {html_path}")

# Convert to PDF
try:
    HTML(string=full_html).write_pdf(str(pdf_path))
    print(f"PDF saved to: {pdf_path}")
except Exception as e:
    print(f"Error creating PDF: {e}")
    # Try alternative approach
    try:
        HTML(filename=str(html_path)).write_pdf(str(pdf_path))
        print(f"PDF saved to: {pdf_path}")
    except Exception as e2:
        print(f"Alternative approach also failed: {e2}")
        sys.exit(1)

print("Done!")
