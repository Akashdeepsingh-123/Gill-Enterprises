import urllib.request
import re

def search_and_download(query, filename):
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        # find the first proxy image url
        match = re.search(r'//external-content\.duckduckgo\.com/iu/\?u=([^&"\'\?]+)', html)
        if match:
            img_url = urllib.parse.unquote(match.group(1))
            print(f"Found {img_url}")
            req_img = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            img_data = urllib.request.urlopen(req_img, timeout=10).read()
            with open(filename, 'wb') as f:
                f.write(img_data)
            print(f"Saved {filename}")
            return
        print("No image found")
    except Exception as e:
        print(e)

import urllib.parse
search_and_download("DTDC transparent vector logo png", "public/dtdc-logo.png")
search_and_download("Blue Dart Express transparent logo png", "public/bluedart-logo.png")
