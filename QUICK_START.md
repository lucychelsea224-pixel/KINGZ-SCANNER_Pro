# KINGZ-SCANNER Pro - Quick Reference Guide

## 📁 Project Structure

```
KINGZ-SCANNER_Pro/
├── index.html              (110 KB) - Complete PWA application
├── manifest.json           - PWA manifest for app installation
├── sw.js                   - Service worker for offline support
├── netlify.toml            - Netlify deployment configuration
├── README.md               - Complete project documentation
├── CHANGELOG.md            - Version history and updates
├── DEPLOYMENT.md           - Netlify deployment guide
├── .gitignore              - Git ignore rules
└── .git/                   - Version control history
```

## 🚀 Quick Start Commands

### Local Development
```bash
# Serve locally on port 8000
python3 -m http.server 8000

# Open browser
# http://localhost:8000
```

### Git Operations
```bash
# Check status
git status

# View recent commits
git log --oneline -10

# Push to main branch (triggers Netlify deploy)
git push origin main

# View all changes
git diff
```

## 📱 Latest Features (v2.1.0)

### ✅ Fixed in Recent Updates
- ✅ Mobile crop captures inside selection (not outside)
- ✅ Crop coordinates scale correctly from display to original resolution
- ✅ Unlimited crop stretching - no size restrictions
- ✅ Mobile preview perfectly centered
- ✅ Crop overlay properly positioned over canvas

### 🎯 Key Improvements
| Feature | Before | After |
|---------|--------|-------|
| Crop Direction | Inverted ❌ | Correct ✅ |
| Min Size | 50px (mobile) | 1px (unlimited) ✅ |
| Centering | Left-aligned ❌ | Perfectly centered ✅ |
| Coordinate Scaling | Incorrect ❌ | Accurate ✅ |

## 📊 Project Statistics

- **Main App Size**: 110 KB (optimized)
- **Total Package**: ~130 KB
- **Load Time**: < 2 seconds
- **Lines of Code**: ~3,500 (all in index.html)
- **Dependencies**: None (pure vanilla JavaScript)
- **Browser Support**: All modern browsers

## 🌐 Deploying to Netlify

### One-Time Setup
```bash
# 1. Push to GitHub
git push origin main

# 2. Go to netlify.com
# 3. Click "New site from Git"
# 4. Select this repository
# 5. Deploy! (automatic)
```

### Continuous Deployment
```bash
# After any changes, just push to trigger deployment
git add .
git commit -m "Your message"
git push origin main
# ✅ Netlify deploys automatically!
```

### Your Site URL
```
https://your-site-name.netlify.app
```

## 🔧 Key Files to Modify

### Adding New Features
Edit `/index.html` - all code is here

### Changing Styles
Search for `<style>` section in `index.html`

### Modifying Logic
Search for `function` keyword in `index.html`

### PWA Settings
Edit `manifest.json` - app name, icon, colors

### Offline Support
Edit `sw.js` - cache strategies, offline files

## 📝 Important Functions

### Crop Functions
- `enableMobileCrop()` - Start mobile crop (Line 2418)
- `updateCropRect()` - Update crop during drag (Line 2655)
- `getCropHandleAtPoint()` - Detect handle clicks (Line 2561)
- `applyCrop()` - Apply crop changes (Line 2758)

### Display Functions
- `updateMobileEditPreview()` - Update preview display (Line 2365)
- `displayMobileImage()` - Show image on mobile (Line 2267)
- `showImage()` - Show image on desktop (Line 1320)

### Effect Functions
- `applyMobileEffect()` - Apply selected effect (Line 2332)
- `applyMobileAdjustments()` - Apply brightness/contrast/etc (Line 2341)

## 🐛 Debugging

### Check Browser Console
```javascript
// Open DevTools: F12 or Ctrl+Shift+I
// Go to Console tab
// Look for any red errors
```

### Check ImageData
```javascript
console.log('Image Size:', mobileCurrentImageData.width, 'x', mobileCurrentImageData.height);
console.log('Crop Rect:', mobileCropRect);
```

### Test Crop Calculations
```javascript
// In browser console
mobileCropRect = { x: 100, y: 100, w: 200, h: 200 };
drawMobileCropOverlay();
```

## 🎨 CSS Customization

All CSS is in the `<style>` section. Key variables:
```css
:root {
  --bg: #0d0e11;           /* Dark background */
  --surface: #1a1d22;      /* Card background */
  --text: #e8e8e8;         /* Light text */
  --accent: #e8ff47;       /* Bright green accent */
  --accent2: #00d4ff;      /* Cyan accent */
  --accent3: #ff1744;      /* Red accent */
  --border: #3a3f47;       /* Border color */
}
```

## 📦 Building & Optimization

### Current Size
- HTML: 110 KB
- All features: Crop, effects, export, PWA
- Zero dependencies

### To Reduce Size (if needed)
1. Remove unused effects from `effects` array
2. Remove unused CSS from `<style>` section
3. Minify CSS/JavaScript (use online tools)

## 🔐 Browser Permissions

App requires:
- ✅ Camera access (for photo capture)
- ✅ File access (for image upload)
- ✅ Storage access (for local data)
- ❌ No external API calls
- ❌ No tracking
- ❌ No ads

## 📊 Performance Metrics

Measure performance in DevTools:
1. Open DevTools (F12)
2. Go to Performance tab
3. Click Record
4. Use the app
5. Click Stop
6. Analyze results

**Expected Metrics**:
- First Paint: < 500ms
- Largest Contentful Paint: < 1s
- Time to Interactive: < 1.5s

## 🧪 Testing Checklist

- [ ] Desktop: Upload image
- [ ] Desktop: Apply crop
- [ ] Desktop: Export PDF
- [ ] Mobile: Capture photo
- [ ] Mobile: Apply effects
- [ ] Mobile: Unlimited crop
- [ ] Offline: Disable network, test app
- [ ] Re-enable network

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Complete project overview |
| CHANGELOG.md | Version history and changes |
| DEPLOYMENT.md | Netlify deployment guide |
| This file | Quick reference for developers |
| netlify.toml | Build configuration |

## 💾 Commit Message Format

```bash
# Feature
git commit -m "Add new feature: description"

# Fix
git commit -m "Fix bug: description"

# Update
git commit -m "Update: description"

# Docs
git commit -m "Docs: update documentation"

# Include co-author
git commit -m "Your message

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

## 🚨 Common Issues

| Issue | Solution |
|-------|----------|
| Crop not working | Hard refresh (Ctrl+Shift+R) |
| Preview off-center | Clear cache (Ctrl+Shift+Delete) |
| Service worker not updating | Hard refresh + clear cache |
| File upload not working | Check file size < 50MB |
| Export failed | Check disk space, try PNG format |

## 📞 Support

- **Documentation**: See README.md
- **Issues**: Check browser console (F12)
- **Deployment**: See DEPLOYMENT.md
- **Version Info**: See CHANGELOG.md

---

**Version**: 2.1.0
**Last Updated**: March 24, 2026
**Status**: Production Ready ✅

For full documentation, see README.md
For deployment help, see DEPLOYMENT.md
For version history, see CHANGELOG.md
