from PIL import Image, ImageDraw, ImageFont
import os

def create_logo(text, filename, size, font_size, italic=False, color="white"):
    # Create transparent image
    img = Image.new('RGBA', size, (255, 255, 255, 0))
    d = ImageDraw.Draw(img)
    
    # Try to use a bold/italic system font
    try:
        font = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Bold Italic.ttf', font_size)
    except:
        try:
            font = ImageFont.truetype('/Library/Fonts/Arial Bold Italic.ttf', font_size)
        except:
            font = ImageFont.load_default()
            
    # Draw text
    d.text((10, 10), text, fill=color, font=font)
    img.save(filename)
    print(f"Created {filename}")

create_logo("DHL", "public/dhl-logo.png", (150, 70), 50)
create_logo("DTDC", "public/dtdc-logo.png", (150, 70), 45)
create_logo("BLUE DART", "public/bluedart-logo.png", (300, 70), 45)
