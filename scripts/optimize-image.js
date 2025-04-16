const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Function to optimize an image
async function optimizeImage(inputPath, outputPath) {
  try {
    const info = await sharp(inputPath)
      .resize(1200) // Resize to max width of 1200px (adjust as needed)
      .webp({ quality: 80 }) // Convert to WebP with 80% quality
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size / 1024 / 1024;
    const newSize = fs.statSync(outputPath).size / 1024 / 1024;

    console.log(`Optimized: ${path.basename(inputPath)}`);
    console.log(`Original size: ${originalSize.toFixed(2)} MB`);
    console.log(`New size: ${newSize.toFixed(2)} MB (${(newSize/originalSize*100).toFixed(1)}%)`);
    console.log(`Dimensions: ${info.width} x ${info.height}`);
    console.log('-----------------------------------');

    return { originalSize, newSize, width: info.width, height: info.height };
  } catch (err) {
    console.error(`Error optimizing ${inputPath}:`, err);
    return null;
  }
}

// Images to optimize
const images = [
  {
    input: 'public/images/projects/barbershop.png',
    output: 'public/images/projects/barbershop-optimized.webp'
  },
  {
    input: 'public/images/projects/plumbingbuisness.png',
    output: 'public/images/projects/plumbingbuisness-optimized.webp'
  }
];

// Process all images
async function processAllImages() {
  console.log('Starting image optimization...');

  for (const image of images) {
    await optimizeImage(image.input, image.output);
  }

  console.log('All images optimized successfully!');
}

processAllImages();
