import re

with open(r"C:\Users\adarsh singh\.gemini\antigravity\brain\34c222ed-e590-4a8f-a2a4-0abed3194ce8\.system_generated\steps\695\content.md", "r", encoding="utf-8") as f:
    content = f.read()

# find all literal string values that look like form questions
strings = re.findall(r'\[[0-9]+,"([^"]+)"', content)
for s in strings:
    if len(s) > 5 and not s.startswith("http") and not s.startswith("The Indian") and not s.startswith("THE INDIAN"):
        print(s)
