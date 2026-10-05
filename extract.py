import urllib.request
import subprocess
import sys

subprocess.check_call([sys.executable, "-m", "pip", "install", "PyMuPDF"])
import fitz

url = "https://static.pib.gov.in/WriteReadData/userfiles/Bio-112_First%20Ladies.pdf"
pdf_path = "FirstLadies.pdf"
urllib.request.urlretrieve(url, pdf_path)

doc = fitz.open(pdf_path)
for i in range(len(doc)):
    page = doc.load_page(i)
    text = page.get_text()
    if "Aditi Pant" in text or "ADITI PANT" in text:
        print(f"Found Aditi Pant on page {i}")
        images = page.get_images(full=True)
        largest_size = 0
        best_image = None
        best_ext = None
        for img in images:
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            if len(image_bytes) > largest_size:
                largest_size = len(image_bytes)
                best_image = image_bytes
                best_ext = base_image["ext"]
        if best_image:
            with open(f"public/editorial-pioneers/aditi-pant.jpg", "wb") as f:
                f.write(best_image)
            print("Saved portrait!")
            break
