# Deployment Guide

## Quick Start for Netlify

### Prerequisites
- GitHub account with this repository
- Netlify account (free tier available)

### Step 1: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Choose GitHub
4. Select your `KINGZ-SCANNER_Pro` repository
5. Click "Deploy site"

### Step 2: Configuration
Netlify will automatically detect `netlify.toml` configuration and use it:
- **Build Command**: None (single-file PWA)
- **Publish Directory**: `.` (root directory)
- **Redirects**: Configured in netlify.toml

### Step 3: Set Custom Domain (Optional)
1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS setup instructions
4. SSL certificate is auto-generated

## What Gets Deployed

```
/
├── index.html          (113 KB) - Main PWA app
├── manifest.json       (1 KB)   - PWA manifest
├── sw.js              (2 KB)   - Service worker
├── README.md          (6 KB)   - Documentation
├── CHANGELOG.md       (5 KB)   - Version history
├── DEPLOYMENT.md      (This file)
└── netlify.toml       (2 KB)   - Build config
```

**Total Size**: ~130 KB (highly optimized)

## Automatic Deploys

Every time you push to the main branch:
1. Netlify detects the push
2. Automatically pulls latest code
3. Deploys within seconds
4. Deploys to production automatically

### To Deploy Manually:
```bash
# Commit and push to main branch
git add .
git commit -m "Your message"
git push origin main
```

## Environment Variables (If Needed)

Currently, this PWA doesn't require environment variables. All settings are client-side.

To add in future:
1. Go to Netlify > Site Settings > Build & Deploy > Environment
2. Add variables as needed
3. References in code: `process.env.VARIABLE_NAME`

## Build Output

Netlify will show:
```
✅ Site is live
🔗 https://kingz-scanner.netlify.app
📊 Build time: ~3s
📦 Size: 130 KB
🚀 Status: Deployed
```

## Performance Optimization

### Caching Strategy (Configured in netlify.toml)
- **HTML files**: 1 hour cache
- **Service worker**: No cache (always fresh)
- **Images**: 1 day cache
- **Manifest**: 1 hour cache

### GZIP Compression
Automatically enabled for all text-based files.

## Testing Before Deploy

### Local Test
```bash
# Serve locally on port 8000
python3 -m http.server 8000

# Open browser
# http://localhost:8000
```

### Test on Mobile
1. Get your local IP: `ipconfig getifaddr en0` (macOS) or `hostname -I` (Linux)
2. On mobile device: `http://<YOUR_IP>:8000`
3. Test all features: capture, crop, effects, export

## Monitoring

### View Deployment Logs
1. Netlify Dashboard > Deployments
2. Click on any deployment
3. View full build log

### Error Troubleshooting
Common issues and solutions:

**Issue**: Site shows 404 on page refresh
- **Solution**: Already configured in netlify.toml with redirects

**Issue**: Service worker not updating
- **Solution**: Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

**Issue**: Slow uploads
- **Solution**: Check browser console for JavaScript errors

## Rollback

To revert to a previous version:
1. Go to Netlify > Deployments
2. Find the deployment you want
3. Click "Publish deploy"
4. Select previous deployment
5. Click "Publish"

## DNS Setup (Custom Domain)

If using your own domain (e.g., scanner.yourdomain.com):

### CNAME Record
```
Host: scanner
Type: CNAME
Value: your-site.netlify.app
```

### A Record (Alternative)
```
Host: @
Type: A
Value: 99.84.248.221 (or Netlify's current IP)
```

Check Netlify dashboard for exact values.

## SSL/HTTPS

✅ Automatic! Netlify provides free SSL certificates via Let's Encrypt.
- HTTPS enabled by default
- Auto-renewal included
- No additional configuration needed

## Rate Limits

Netlify free tier allows:
- Unlimited deployments
- 100 GB/month bandwidth
- Sufficient for production use

## Support & Documentation

- **Netlify Docs**: https://docs.netlify.com
- **Build Configuration**: https://docs.netlify.com/configure-builds/overview
- **Troubleshooting**: https://docs.netlify.com/troubleshooting/overview

## Advanced Options

### Enable Deploy Previews
1. Netlify Dashboard > Deploy settings
2. Under "Deploy previews", select GitHub branches
3. Each PR gets a unique preview URL

### Setup Deploy Notifications
1. Settings > Deploy notifications
2. Add Slack, Email, or Webhook notifications
3. Get notified on successful/failed deploys

## CI/CD Integration

Current setup:
✅ Automatic deploys on git push
✅ Preview deploys on pull requests
✅ Instant rollback available

No GitHub Actions needed - Netlify handles it!

## Summary

| Aspect | Status |
|--------|--------|
| Auto-deploy | ✅ Enabled |
| SSL/HTTPS | ✅ Free & Auto |
| Caching | ✅ Optimized |
| Compression | ✅ GZIP enabled |
| CDN | ✅ Global CDN |
| Build Time | ~3 seconds |
| Ready for Production | ✅ Yes |

---

**Next Steps**: Push to GitHub and Netlify will automatically deploy!
