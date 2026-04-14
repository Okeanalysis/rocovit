
import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
    if (styleMatch) {
        const style = styleMatch[1];
        let balance = 0;
        const lines = style.split('\n');
        const styleStartLine = content.substring(0, styleMatch.index).split('\n').length;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            for (let j = 0; j < line.length; j++) {
                if (line[j] === '{') balance++;
                if (line[j] === '}') balance--;
                if (balance < 0) {
                    console.log(`${file}: Unbalanced at line ${styleStartLine + i}!`);
                    i = lines.length; // break outer loop
                    break;
                }
            }
        }


    }
}

