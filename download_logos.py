import urllib.request
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def download(url, filename):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, context=ctx) as response, open(filename, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Failed {filename}: {e}")

download('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/dhl.svg', 'public/dhl-logo.svg')
# Download white PNGs from a logo API if possible, or just use clearbit
download('https://logo.clearbit.com/dhl.com', 'public/dhl.png')
download('https://logo.clearbit.com/dtdc.in', 'public/dtdc.png')
download('https://logo.clearbit.com/bluedart.com', 'public/bluedart.png')
