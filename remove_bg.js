const Jimp = require("jimp");

async function removeBackground() {
  try {
    const image = await Jimp.read("public/images/logo.jpeg");
    
    // Get the color of the top-left pixel
    const bgPixel = image.getPixelColor(0, 0);
    const bgRgba = Jimp.intToRGBA(bgPixel);

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      const dist = Math.abs(r - bgRgba.r) + Math.abs(g - bgRgba.g) + Math.abs(b - bgRgba.b);
      
      if (dist < 40) {
        this.bitmap.data[idx + 3] = 0;
      } else if (dist < 90) {
        this.bitmap.data[idx + 3] = Math.floor(255 * ((dist - 40) / 50));
      }
    });

    await image.writeAsync("public/images/logo.png");
    console.log("Success");
  } catch (err) {
    console.error(err);
  }
}

removeBackground();
