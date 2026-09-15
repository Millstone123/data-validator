// Data Validator script
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json')).sort();

console.log('Validating data files...');
files.forEach(file => {
  const content = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf8'));
  console.log(`✓ ${file}: ${content.hash ? 'valid' : 'missing hash'}`);
});

console.log('Validation complete');
