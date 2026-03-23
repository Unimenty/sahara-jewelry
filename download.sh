#!/bin/bash

# Create a directory for the images
mkdir -p instagram_images
cd instagram_images

# Check if jq is installed
if ! command -v jq &> /dev/null; then
    echo "jq is not installed. Installing jq..."
    sudo apt-get install jq -y  # For Debian/Ubuntu
    # For other distributions:
    # sudo yum install jq      # RHEL/CentOS
    # sudo pacman -S jq        # Arch Linux
fi

# Download all images with parallel processing
echo "Starting download of images..."

# Extract URLs and download with custom filenames
jq -r '.[] | .displayUrl' ../images.json | \
    while read -r url; do
        # Generate a filename from the URL (using part of the ID)
        filename=$(echo "$url" | grep -oP '(?<=/)[^/]+(?=\?stp)' | head -1 | sed 's/_n\.jpg$//')
        if [ -z "$filename" ]; then
            filename=$(echo "$url" | grep -oP '(\d+_[^_]+_[^_]+)' | head -1)
        fi
        # Fallback to incrementing number if filename extraction fails
        if [ -z "$filename" ]; then
            filename="image_$(printf "%03d" $((++counter)))"
        fi
        filename="${filename}.jpg"
        
        echo "Downloading: $filename"
        wget -q --show-progress -O "$filename" "$url" || \
            echo "Failed to download: $url"
    done

echo "Download complete! Files saved in instagram_images directory"
ls -la