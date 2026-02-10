# PDF Preview Images

This folder should contain three PNG images representing different versions of the compiled LaTeX document.

## Quick Solution for Demo

Since we cannot create actual PNG files programmatically, you have several options:

### Option 1: Use SVG as IMG src (Recommended for quick demo)
The browser can display SVG files directly. Create three SVG files:
- `preview-v1.svg` - Basic academic paper layout
- `preview-v2.svg` - Improved formatting  
- `preview-v3.svg` - Restructured content

Then update `data/drafts.js` to use `.svg` instead of `.png`:
```javascript
previewImage: 'assets/previews/preview-v1.svg'
```

### Option 2: Use Online LaTeX Compiler
1. Go to https://www.overleaf.com or https://latexbase.com
2. Paste the LaTeX content from `data/drafts.js` for each version
3. Compile and download the PDF
4. Convert PDF to PNG using online tools or:
   - Windows: Use Snipping Tool to screenshot
   - Mac: Open in Preview, export as PNG
   - Linux: Use `convert` command from ImageMagick

### Option 3: Use Placeholder Images
For quick testing, use any academic paper screenshots or create simple mockups showing:
- v1: Simple, unpolished text layout
- v2: Better formatted with proper sections
- v3: Professional with abstract, sections, and conclusion

### Option 4: Create SVG Mockups
I'll create SVG files that look like academic papers. These work perfectly in browsers.

## Current Status

The demo will work even without images - it will just show broken image icons. The core functionality (editor, file tree, AI actions) will still work perfectly.

## To Make It Production-Ready

1. Compile the LaTeX from `data/drafts.js` using a real LaTeX compiler
2. Convert the PDFs to PNG images (800x1000px recommended)
3. Name them `preview-v1.png`, `preview-v2.png`, `preview-v3.png`
4. Place them in this folder

The demo is fully functional without images - they're just visual enhancements for the PDF preview panel.
