const fs = require('fs');
const path = require('path');
const watch = process.argv.includes('--watch');

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const postcss = require('postcss');
const tailwindcss = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

const inputFile = path.join(__dirname, 'src', 'input.css');
const outputFile = path.join(__dirname, 'dist', 'output.css');

let debounceTimer;
const DEBOUNCE_DELAY = 300;

async function buildCSS() {
  try {
    const css = fs.readFileSync(inputFile, 'utf8');
    const result = await postcss([tailwindcss, autoprefixer]).process(css, {
      from: inputFile,
      to: outputFile,
    });

    fs.writeFileSync(outputFile, result.css);
    console.log(`✓ CSS built at ${new Date().toLocaleTimeString()}`);
  } catch (error) {
    console.error('Error building CSS:', error.message);
  }
}

buildCSS();

if (watch) {
  console.log('👀 Watching for CSS changes...');
  
  fs.watch(inputFile, (eventType, filename) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      buildCSS();
    }, DEBOUNCE_DELAY);
  });
  
  const srcDir = path.join(__dirname);
  fs.watch(srcDir, { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.html') && !filename.includes('dist') && !filename.includes('node_modules')) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        buildCSS();
      }, DEBOUNCE_DELAY);
    }
  });
}
