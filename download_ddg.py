from duckduckgo_search import DDGS
import urllib.request

def download_logo(query, filename):
    with DDGS() as ddgs:
        results = list(ddgs.images(query, max_results=5))
        for res in results:
            url = res['image']
            try:
                req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=5) as response, open(filename, 'wb') as out_file:
                    out_file.write(response.read())
                print(f'Successfully downloaded {filename}')
                return
            except:
                continue
        print(f'Failed to download {filename}')

download_logo('DTDC logo transparent filetype:png', 'public/dtdc-logo.png')
download_logo('Blue Dart logo transparent filetype:png', 'public/bluedart-logo.png')
