import re
import json

with open(r"C:\Users\adarsh singh\.gemini\antigravity\brain\34c222ed-e590-4a8f-a2a4-0abed3194ce8\.system_generated\steps\695\content.md", "r", encoding="utf-8") as f:
    content = f.read()

match = re.search(r'var FB_PUBLIC_LOAD_DATA_ = (.*?);', content)
if not match:
    # Try WIZ_global_data
    match = re.search(r'window\.WIZ_global_data = (\{.*?\});', content)
    if match:
        data = json.loads(match.group(1))
        # FB_PUBLIC_LOAD_DATA is usually under the key 'fb_data' or something similar.
        print("Found WIZ_global_data. Let's dump some keys.")
        for k in data.keys():
            print(k)
            # if it contains arrays, it might be the form data
            val = data[k]
            if isinstance(val, str) and val.startswith('%.@.'):
                print(f"Key {k} is a serialized array.")

else:
    data = json.loads(match.group(1))
    # Iterate through form items
    items = data[1][1]
    for item in items:
        title = item[1]
        print(f"Item: {title}")
