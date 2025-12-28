#!/bin/bash

# Install tools if needed
sudo apt-get install -y imagemagick webp 2>/dev/null || true

echo "📸 Optimizing HUGE product images..."

# Optimize Pillow images (4000x3000 → 800x600)
convert attached_assets/CoolIcePillow_1765828175418.jpg -resize 800x600 -quality 75 -strip attached_assets/CoolIcePillow_OPTIMIZED.jpg
convert attached_assets/ActiveCharcoalPillow_1765828175419.jpg -resize 800x600 -quality 75 -strip attached_assets/ActiveCharcoalPillow_OPTIMIZED.jpg
convert attached_assets/BambooOrganicPillow_1765828175418.jpg -resize 800x600 -quality 75 -strip attached_assets/BambooOrganicPillow_OPTIMIZED.jpg
convert attached_assets/HotelComfortPillows_1765828175417.jpg -resize 800x600 -quality 75 -strip attached_assets/HotelComfortPillow_OPTIMIZED.jpg

# Optimize Protector images
convert attached_assets/TerryMattressProtector_1765828175413.jpg -resize 800x600 -quality 75 -strip attached_assets/TerryMattressProtector_OPTIMIZED.jpg
convert attached_assets/PremiumMattressProtector_1765828175414.jpg -resize 800x600 -quality 75 -strip attached_assets/PremiumMattressProtector_OPTIMIZED.jpg
convert attached_assets/MattressEncasementSupreme_1765828175416.jpg -resize 800x600 -quality 75 -strip attached_assets/MattressEncasementSupreme_OPTIMIZED.jpg

# Optimize Theme images (1820x1024 → 1200x675)
convert attached_assets/ThemePage1_1765832539451.png -resize 1200x675 -quality 80 -strip attached_assets/ThemePage1_OPTIMIZED.jpg
convert attached_assets/ThemePage2_1765832539450.png -resize 1200x675 -quality 80 -strip attached_assets/ThemePage2_OPTIMIZED.jpg

echo "✅ Optimization complete!"
echo ""
echo "📊 BEFORE vs AFTER:"
echo "=================="
echo "Cool Ice Pillow:"
echo "  Before: $(ls -lh attached_assets/CoolIcePillow_1765828175418.jpg | awk '{print $5}') (4000x3000)"
echo "  After:  $(ls -lh attached_assets/CoolIcePillow_OPTIMIZED.jpg | awk '{print $5}') (800x600)"
echo ""
echo "Theme Page 1:"
echo "  Before: $(ls -lh attached_assets/ThemePage1_1765832539451.png | awk '{print $5}') (1820x1024)"
echo "  After:  $(ls -lh attached_assets/ThemePage1_OPTIMIZED.jpg | awk '{print $5}') (1200x675)"
