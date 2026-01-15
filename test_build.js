const fs = require('fs');
const path = require('path');

// Look for HTML files in common locations
const locations = [
  'dist',
  'build',
  'out',
  '.next',
  'client/dist',
  'public'
];

console.log('Searching for build output...');
locations.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`\nChecking ${dir}:`);
    const htmlFiles = [];
    
    function search(dirPath) {
      try {
        const items = fs.readdirSync(dirPath);
        items.forEach(item => {
          const fullPath = path.join(dirPath, item);
          try {
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
              search(fullPath);
            } else if (item.endsWith('.html')) {
              htmlFiles.push(fullPath);
            }
          } catch (e) {}
        });
      } catch (e) {}
    }
    
    search(dir);
    htmlFiles.forEach(file => {
      console.log(`  Found: ${file}`);
      // Check if it has FAQ
      try {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('FAQPage')) {
          console.log(`    ✓ Contains FAQ schema`);
        }
      } catch (e) {}
    });
  }
});
