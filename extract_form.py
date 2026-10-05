import re

with open(r"C:\Users\adarsh singh\.gemini\antigravity\brain\34c222ed-e590-4a8f-a2a4-0abed3194ce8\.system_generated\steps\695\content.md", "r", encoding="utf-8") as f:
    content = f.read()

# Google forms typically use <div role="heading" aria-level="3" ...> for question titles.
import html
pattern = r'<div[^>]*?role="heading"[^>]*?aria-level="3"[^>]*?>.*?<span[^>]*dir="auto"[^>]*>(.*?)</span>'

matches = re.findall(pattern, content, re.DOTALL)
if not matches:
    # Try another pattern, maybe M7eMe class
    pattern = r'<span[^>]*class="[^"]*M7eMe[^"]*"[^>]*>(.*?)</span>'
    matches = re.findall(pattern, content, re.DOTALL)

for i, m in enumerate(matches):
    print(f"Q{i+1}: {html.unescape(m)}")
