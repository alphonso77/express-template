import fs from 'fs';
import path from 'path';

// grab html & js files in src/public/jobs and copy them to dist/public/jobs
const sourceDir = './src/templates';
const destDir = './dist/templates';
fs.readdirSync(sourceDir).forEach(file => {
    if (!file.endsWith('.ejs')) return;
    // create destDir if it doesn't exist
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir);
    fs.copyFileSync(path.join(sourceDir, file), path.join(destDir, file));
});