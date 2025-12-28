const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputPath, width = 800) {
    try {
        await sharp(inputPath)
            .rotate() // Auto-rotate based on EXIF
            .resize(width)
            .jpeg({ quality: 75 })
            .toFile(outputPath);
        
        const stats = fs.statSync(outputPath);
        console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${Math.round(stats.size / 1024)}KB)`);
    } catch (error) {
        console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    }
}

// Optimize key images
const images = [
    ['CoolIcePillow_1765828175418.jpg', 'CoolIcePillow_OPTIMIZED_SHARP.jpg'],
    ['ActiveCharcoalPillow_1765828175419.jpg', 'ActiveCharcoalPillow_OPTIMIZED_SHARP.jpg'],
    ['BambooOrganicPillow_1765828175418.jpg', 'BambooOrganicPillow_OPTIMIZED_SHARP.jpg'],
    ['HotelComfortPillows_1765828175417.jpg', 'HotelComfortPillow_OPTIMIZED_SHARP.jpg'],
];

console.log('🔄 Optimizing with Sharp (preserves orientation)...');
images.forEach(([input, output]) => {
    optimizeImage(
        path.join(__dirname, 'attached_assets', input),
        path.join(__dirname, 'attached_assets', output)
    );
});
