const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'chemediit_complete.html');
const dest = path.join(__dirname, 'index.html');

try {
    let content = fs.readFileSync(src, 'utf-8');

    // Subtle improvements
    // Add smooth scroll explicitly to html
    content = content.replace('<style>', '<style>\n        html {\n            scroll-behavior: smooth;\n        }\n');

    // Enhance primary button hover
    content = content.replace('.btn-primary:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 10px 25px rgba(30, 41, 59, 0.3);\n        }',
        '.btn-primary:hover {\n            transform: translateY(-3px) scale(1.02);\n            box-shadow: 0 10px 25px rgba(251, 191, 36, 0.4), 0 0 20px rgba(251, 191, 36, 0.2);\n        }');

    // Enhance feature cards
    content = content.replace('.feature-card:hover {\n            transform: translateY(-5px);\n            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);\n        }',
        '.feature-card:hover {\n            transform: translateY(-8px);\n            box-shadow: 0 20px 40px rgba(251, 191, 36, 0.15);\n            border-color: rgba(251, 191, 36, 0.3);\n        }');

    fs.writeFileSync(dest, content);

    // Delete vite files
    const toDelete = ['package-lock.json', 'vite.config.js', 'tailwind.config.js'];
    for (const file of toDelete) {
        const p = path.join(__dirname, file);
        if (fs.existsSync(p)) fs.unlinkSync(p);
    }

    console.log('Restored index.html and cleaned up. Ready for Vercel and Git.');
} catch (e) {
    console.error(e);
}
