# KINGZ-SCANNER Pro

A powerful, progressive web app for scanning and processing documents with advanced cropping, effects, and multi-page support.

## Features

### 📱 Responsive Design
- **Desktop Version**: Full-featured interface with advanced controls
- **Mobile Version**: Optimized touch interface for smartphones and tablets
- PWA (Progressive Web App) support - works offline and can be installed as an app

### 📸 Capture & Upload
- Live camera capture with real-time preview
- Drag-and-drop file upload support
- Support for multiple image formats (JPEG, PNG, WebP)

### ✂️ Advanced Cropping
- **Interactive Crop Tool**: Drag corners and edges to crop images
- **Unlimited Stretching**: No size restrictions - fit any document size
- **Precise Coordinate Mapping**: Scales correctly from display to original resolution
- **Centered Preview**: Mobile preview is perfectly centered for accurate editing
- **Real-time Visualization**: See exactly what will be cropped before applying

### 🎨 Effects & Adjustments
- Multiple scan effects: Original, B&W, Grayscale, Document, etc.
- **Brightness Control**: Adjust brightness in real-time
- **Contrast Control**: Fine-tune contrast for readability
- **Sharpness Control**: Enhance edge definition
- **Saturation Control**: Adjust color intensity

### 📄 Multi-Page Support
- Add multiple pages to a single document
- Name and rename pages for organization
- Preview all pages in document
- Auto-switch to export section after adding pages

### 💾 Export Options
- Export as PDF (compressed document)
- Export as PNG (single image)
- Export as ZIP (all pages combined)
- Download or share directly

### 🔧 Additional Features
- **Image Rotation**: 90° rotations in both directions
- **Undo Functionality**: Revert crop changes
- **Toast Notifications**: Real-time feedback for user actions
- **Offline Support**: Service worker caching for offline access

## Recent Updates (v2.1.0)

### Fixed Issues
1. **Mobile Crop Coordinate Scaling** (Commit: 623b66e)
   - Fixed inverted crop area - now captures inside the selection box, not outside
   - Corrected coordinate transformation from display size to original image resolution
   - Proper scaling logic ensuring accurate pixel-level cropping

2. **Unlimited Crop Stretching** (Commit: 6f673da)
   - Removed minimum size constraints (20px desktop, 50px mobile)
   - Users can now stretch crop to fit any document size
   - Both desktop and mobile versions updated consistently

3. **Mobile Preview Centering** (Commit: 7ac7cbe)
   - Image preview now perfectly centered in container
   - Crop overlay positioned absolutely centered
   - Fixed coordinate calculations for centered overlay
   - No more image drift to left side

## Technical Details

### Architecture
- **Single-file PWA**: All code in `index.html` for easy deployment
- **Canvas-based Processing**: Uses HTML5 Canvas for image manipulation
- **No External Dependencies**: Pure vanilla JavaScript - no npm packages required
- **Service Worker**: Offline support via `sw.js`

### Key Technologies
- HTML5 Canvas for image processing
- ImageData API for pixel-level manipulation
- Web Workers (optional optimization ready)
- Fetch API for file operations
- LocalStorage for user preferences

### Deployment Structure
```
/
├── index.html          # Main PWA application
├── manifest.json       # PWA manifest
├── sw.js              # Service worker for offline support
├── README.md          # This file
└── netlify.toml       # Netlify deployment config
```

## Installation

### Local Development
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd KINGZ-SCANNER_Pro
   ```

2. Serve locally:
   ```bash
   python3 -m http.server 8000
   # Or use any other HTTP server
   ```

3. Open in browser:
   ```
   http://localhost:8000
   ```

### Netlify Deployment
1. Connect GitHub repository to Netlify
2. Netlify will automatically build and deploy using `netlify.toml` config
3. Your site will be live at `yoursite.netlify.app`

## File Sizes
- `index.html`: ~113 KB (includes all HTML, CSS, and JavaScript)
- `manifest.json`: ~1 KB
- `sw.js`: ~2 KB
- **Total**: ~116 KB (highly optimized single-file solution)

## Browser Support
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 14+)
- Opera: Full support

## Performance
- **Load Time**: < 2 seconds on 4G
- **Memory Usage**: ~50-100 MB (varies with image size)
- **Canvas Operations**: Real-time processing
- **Offline Support**: Full functionality when offline

## Mobile Crop Features
- Responsive touch interface
- Dynamic handle sizing based on zoom level
- Visual dimension display during cropping
- Pinch-to-zoom support
- Automatic scaling for high-DPI devices

## Desktop Crop Features
- Click-and-drag interface
- Keyboard support for fine adjustments
- Multiple crop presets (Custom, A4, etc.)
- Manual numeric input for precise cropping

## Changelog

### v2.1.0 (Current)
- ✅ Fixed mobile crop coordinate scaling
- ✅ Removed crop size restrictions
- ✅ Centered mobile preview and overlay
- ✅ Improved coordinate transformation accuracy

### v2.0.0
- Added unlimited crop stretching
- Improved mobile UI/UX
- Enhanced effects and adjustments

### v1.0.0
- Initial release with basic scanning and cropping

## Known Limitations
- Maximum recommended image size: 8000x6000 pixels
- PDF export uses compression for file size optimization
- Some effects may be slower on older devices

## Troubleshooting

### Crop Not Working
- Ensure image is loaded properly
- Check browser console for errors
- Try refreshing and re-uploading image

### Preview Off-Center
- Clear browser cache: Ctrl+Shift+Delete (Ctrl+Cmd+Delete on Mac)
- Close and reopen app

### Export Failed
- Check available disk space
- Ensure browser has download permissions
- Try different export format

## Contributing
Contributions are welcome! Please follow these guidelines:
1. Create a feature branch
2. Commit with clear messages
3. Push to GitHub
4. Create a Pull Request

## License
This project is open source and available under the MIT License.

## Support
For issues, questions, or suggestions, please open a GitHub issue or contact the development team.

---

**Last Updated**: March 24, 2026
**Current Version**: 2.1.0
**Status**: Production Ready ✅
