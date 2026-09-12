import sys
try:
    from PIL import Image, ImageFilter
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageFilter

def remove_background(input_path, output_path, tolerance=40):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    # Assuming top-left pixel is the background color
    bg_color = img.getpixel((0, 0))
    
    data = img.getdata()
    new_data = []
    
    for item in data:
        # Check Manhattan distance from bg_color
        diff = sum(abs(item[i] - bg_color[i]) for i in range(3))
        if diff < tolerance:
            new_data.append((item[0], item[1], item[2], 0))
        else:
            # Soften edges slightly by checking distance
            if diff < tolerance + 30:
                alpha = int(255 * ((diff - tolerance) / 30))
                new_data.append((item[0], item[1], item[2], alpha))
            else:
                new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print("Successfully converted logo to PNG with transparent background.")

remove_background("public/images/logo.jpeg", "public/images/logo.png")
