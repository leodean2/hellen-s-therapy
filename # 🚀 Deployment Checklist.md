# 🚀 Deployment Checklist - Serenity Counseling Website

## Pre-Launch Checks  
✅ **Functionality**  
- [ ] Test contact form submissions (via Netlify Forms/email)  
- [ ] Verify mobile menu works on all screen sizes  
- [ ] Check testimonial slider auto-rotation  

✅ **Performance**  
- [ ] Compress images (`/assets` folder)  
- [ ] Minify CSS/JS (use [CSSNano](https://cssnano.co/)/[Terser](https://terser.org/))  

✅ **SEO Basics**  
- [ ] Add `<meta>` descriptions to all HTML files  
- [ ] Test with [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)  

## Hosting-Specific Steps  
### **Netlify**  
1. [ ] Enable "Auto Publishing" in build settings  
2. [ ] Add environment variables (if any) in `Site settings > Environment`  

### **GitHub Pages**  
1. [ ] Set `docs/` as source branch in repo settings  
2. [ ] Enable "Enforce HTTPS"  

---
[View full deployment guide](https://github.com/hellen-s-therapy/wiki/Deployment)  