"use client";
import { CldImage } from 'next-cloudinary';

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function ImageFront() {
  return (
    <CldImage
          src="https://res.cloudinary.com/dhrvenmlj/image/upload/v1748230605/IMG_8552_nfar7z.heic"
          width="500" // Transform the image: auto-crop to square aspect_ratio
          height="500"
          crop={{
              type: 'auto',
              source: true
          }} alt={''}    />
  );
}