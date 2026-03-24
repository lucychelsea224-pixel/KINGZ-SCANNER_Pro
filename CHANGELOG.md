# Changelog

All notable changes to KINGZ-SCANNER Pro are documented in this file.

## [2.1.0] - 2026-03-24

### Fixed
- **Mobile Crop Coordinate Scaling** (Commit: 623b66e)
  - Fixed inverted crop area bug where outside region was being captured instead of inside
  - Corrected coordinate transformation from displayed image size (CSS pixels) to natural image size (original file resolution)
  - Implemented proper scaling logic for high-DPI devices
  - Result: Clean crops at original image resolution with accurate pixel mapping

- **Mobile Preview Not Centered** (Commit: 7ac7cbe)
  - Image preview shifted to left side of container
  - Crop overlay not aligned with canvas display
  - Canvas using `max-width/max-height` instead of explicit dimensions
  - Fixed by: Implementing flexbox centering with explicit width/height, positioning overlay with transform translate(-50%, -50%)
  - Result: Perfect centering with accurate coordinate mapping

### Removed
- **Crop Size Restrictions** (Commit: 6f673da)
  - Removed minimum size constraints on desktop version (minSize = 20px)
  - Removed minimum size constraints on mobile version (minW = 50px, minH = 50px)
  - Changed enforcement to `Math.max(1, newSize)` allowing unrestricted stretching
  - Result: Users can now stretch crop box to fit any document size

### Changed
- Updated `updateCropRect()` function for unlimited stretching on mobile
- Updated `doCrop()` function for unlimited stretching on desktop
- Modified `enableMobileCrop()` to properly center overlay canvas
- Updated `updateMobileEditPreview()` to use explicit width/height with margin centering
- Improved coordinate transformation in `getCropHandleAtPoint()`

### Technical Details

#### Coordinate System Fix
```javascript
// OLD (Broken)
const scaleX = displayWidth / imgData.width;
const scaleY = displayHeight / imgData.height;
const cropX = mobileCropRect.x * scaleX;  // Wrong scaling

// NEW (Fixed)
const scaleX = overlay.width / displayWidth;
const scaleY = overlay.height / displayHeight;
const imageX = x * scaleX;  // Correct transformation
```

#### Centering Fix
```javascript
// OLD (Left-aligned)
overlay.style.top = '0';
overlay.style.left = '0';

// NEW (Centered)
overlay.style.top = '50%';
overlay.style.left = '50%';
overlay.style.transform = 'translate(-50%, -50%)';
```

#### Size Constraint Removal
```javascript
// OLD (Restricted)
const minW = 50, minH = 50;
if (newW > minW) mobileCropRect.w = newW;

// NEW (Unrestricted)
const maxX = imgData.width, maxY = imgData.height;
mobileCropRect.w = Math.min(newW, maxX - mobileCropRect.x);
```

### Commits in This Release
1. **623b66e**: Fix mobile crop: correct coordinate scaling and inverted crop area
2. **6f673da**: Remove crop size restrictions - allow unlimited stretching
3. **7ac7cbe**: Center mobile image preview and crop overlay

### Testing
- ✅ Mobile crop captures inside selection box (not outside)
- ✅ Crop coordinates scale correctly from display to original resolution
- ✅ Crop preview centered in mobile container
- ✅ Handles work without size restrictions
- ✅ High-DPI device support verified

### Files Modified
- `index.html`
  - `applyCrop()` - Fixed coordinate usage
  - `doCrop()` - Removed minSize constraint
  - `updateMobileCropOverlay()` - Fixed overlay drawing
  - `getCropHandleAtPoint()` - Fixed coordinate conversion
  - `updateCropRect()` - Removed minW/minH constraints, fixed scaling
  - `enableMobileCrop()` - Added centering and proper overlay sizing
  - `updateMobileEditPreview()` - Implemented centering with explicit dimensions

## [2.0.0] - 2026-03-20

### Added
- Unlimited crop stretching (no minimum size)
- Mobile-optimized touch interface
- Real-time dimension display during cropping
- Improved visual feedback with dimension text

### Changed
- Desktop UI/UX improvements
- Enhanced effects processing
- Better undo functionality

## [1.0.0] - 2026-03-10

### Initial Release
- Basic document scanning
- Image capture and upload
- Simple crop functionality
- Effects and adjustments
- PDF export
- PWA support
- Offline functionality

---

## Version Format
This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes or major features
- **MINOR**: New features without breaking changes
- **PATCH**: Bug fixes

## Deployment Status
- ✅ **Production**: Live and stable
- ✅ **Tested**: All critical features verified
- ✅ **Documented**: Complete documentation available
- ✅ **Netlify Ready**: Configuration file included
