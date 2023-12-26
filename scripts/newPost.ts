// create new post markdown in content directory, add title frontmatter, then open this markdown file in visual stydio code
// TODO
import fs from 'fs';
import path from 'path';
import config from '~config';

const contentDir = path.join(process.cwd(), config.content);

if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir);
}

// fs.writeFileSync(
// 	path.join(contentDir, `${new Date().getTime()}.md`),
// )
