import fs from 'fs';
import path from 'path';

// grab html & js files in src/public/jobs and copy them to dist/public/jobs
const assetDirs = ['css', 'templates'];
for (const assetDir of assetDirs) {
    console.log(`moving assets for: ${assetDir}`);
    const sourceDir = `./src/${assetDir}`;
    const destDir = `./dist/${assetDir}`;
    if (!fs.existsSync(sourceDir)) continue;
    fs.readdirSync(sourceDir).forEach(file => {
        if (!file.endsWith('.ejs') && !file.endsWith('.js') && !file.endsWith('.css')) return;
        // create destDir if it doesn't exist
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir);
        fs.copyFileSync(path.join(sourceDir, file), path.join(destDir, file));
    });
}
