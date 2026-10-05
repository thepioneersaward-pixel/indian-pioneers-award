import sys
import subprocess

subprocess.check_call([sys.executable, "-m", "pip", "install", "beautifulsoup4"])
from bs4 import BeautifulSoup

with open(r"C:\Users\adarsh singh\.gemini\antigravity\brain\34c222ed-e590-4a8f-a2a4-0abed3194ce8\.system_generated\steps\695\content.md", "r", encoding="utf-8") as f:
    content = f.read()

soup = BeautifulSoup(content, "html.parser")
headings = soup.find_all(attrs={"role": "heading"})
for h in headings:
    print(h.text)
