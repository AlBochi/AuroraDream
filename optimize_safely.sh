#!/bin/bash
echo "🛡️  SAFE IMAGE OPTIMIZATION"
echo "==========================="
echo "Optimizing one image at a time to prevent crashes..."
echo ""

# Backup first
echo "📦 Creating backup..."
mkdir -p attached_assets/backup_$(date +%Y%m%d)
cp attached_assets/*.jpg attached_assets/*.png attached_assets/backup_$(date +%Y%m%d)/ 2>/dev/null || true

# Install only if needed
if ! command -v convert &> /dev/null; then
    echo "Installing ImageMagick..."
    sudo apt-get update && sudo apt-get install -y imagemagick
fi

# Function to optimize one image safely
optimize_image() {
    local input="$1"
    local output="$2"
    local size="$3"
    echo "🔄 Optimizing: $(basename "$input")"
    
    # Use lower memory settings
    convert "$input" \
        -resize "$size" \
        -quality 75 \
        -strip \
        -limit memory 256MiB \
        -limit map 512MiB \
        "$output"
    
    echo "  ✅ $(basename "$input") → $(basename "$output")"
    echo "  Size: $(ls -lh "$input" | awk '{print $5}') → $(ls -lh "$output" | awk '{print $5}')"
    echo ""
}

# Optimize the LARGEST images first (biggest impact)
echo "🎯 Targeting largest images first:"

# Check if files exist before optimizing
if [ -f "attached_assets/MattressEncasementSupreme_1765828175416.jpg" ]; then
    optimize_image "attached_assets/MattressEncasementSupreme_1765828175416.jpg" \
                   "attached_assets/MattressEncasementSupreme_OPTIMIZED.jpg" \
                   "800x600"
fi

sleep 1  # Give system a break

if [ -f "attached_assets/ThemePage2_1765832539450.png" ]; then
    optimize_image "attached_assets/ThemePage2_1765832539450.png" \
                   "attached_assets/ThemePage2_OPTIMIZED.jpg" \
                   "1200x675"
fi

sleep 1

if [ -f "attached_assets/BambooOrganicPillow_1765828175418.jpg" ]; then
    optimize_image "attached_assets/BambooOrganicPillow_1765828175418.jpg" \
                   "attached_assets/BambooOrganicPillow_OPTIMIZED.jpg" \
                   "800x600"
fi

echo "✅ Phase 1 complete!"
echo ""
echo "📊 Next steps:"
echo "1. Test optimized images on your site"
echo "2. Update imports to use *_OPTIMIZED files"
echo "3. Repeat for remaining images"
