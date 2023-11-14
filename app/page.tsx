import fs from 'fs';
import getViews from '~app/lib/getviews';
import MarkdownWrapper from '~app/ui/MarkdownWrapper';

export default async function page() {
  const readme = fs.readFileSync('README.md', 'utf-8');

  const views = await getViews('views', true);

  return (
    <div className="prose max-w-none">
      <div className="flex justify-end">{views.toLocaleString()} views</div>
      <MarkdownWrapper text={readme} />
    </div>
  );
}
