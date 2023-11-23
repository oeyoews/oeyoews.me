import fs from 'fs';
import MarkdownWrapper from '~ui/MarkdownWrapper';

const page = () => {
  const readme = fs.readFileSync('README.md', 'utf-8');

  return (
    <div className="prose max-w-none">
      <MarkdownWrapper text={readme} />
    </div>
  );
};
export default page;
