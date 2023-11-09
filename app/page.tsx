import Markdown from 'react-markdown';

import fs from 'fs';

function page() {
  const readmecontent = fs.readFileSync('README.md', 'utf8');
  return (
    <div className="prose prose-indigo">
      <Markdown>{readmecontent}</Markdown>
    </div>
  );
}

export default page;
