import fs from 'fs';
import md5 from 'md5';
import path from 'path';

export type Post = {
  metadata: Metadata;
  slug: string;
  content: string;
};

type Metadata = {
  title: string;
  date: string;
  summary: string;
  image: string;
  password: string;
  draft: boolean | string;
};

const parseDate = (dateString: string): string | number => {
  const parsedDate = Date.parse(dateString);
  return isNaN(parsedDate) ? dateString : parsedDate;
};
const parseFrontmatter = (fileContent: string, fileName: string) => {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  if (match) {
    const frontMatterBlock = match[1];
    const content = fileContent.replace(frontmatterRegex, '').trim();
    const frontMatterLines = frontMatterBlock.trim().split('\n');
    const metadata: Partial<Metadata> = {};

    frontMatterLines.forEach((line) => {
      const [key, ...valueArr] = line.split(': ');
      let value: any = valueArr.join(': ').trim();
      value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
      if (value === 'true') {
        value = true;
      } else if (value === 'false') {
        value = false;
      }
      if (key.trim() === 'date') {
        value = parseDate(value);
      }
      metadata[key.trim() as keyof Metadata] = value;
    });

    return { metadata: metadata as Metadata, content };
  } else {
    // No frontmatter found, use default values
    return {
      metadata: {
        title: fileName.replace(/\.mdx?$/, ''), // Use file name as the default title
        date: new Date().toISOString(), // Use current date as the default
        summary: '',
        image: '',
        password: '',
        draft: false,
      },
      content: fileContent.trim(),
    };
  }
};

const getMDXFiles = (dir: string) => {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
};

const readMDXFile = (fileName: string, dir: string) => {
  const filePath = path.join(dir, fileName);
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent, fileName);
};

const getMDXData = (dir: string): Post[] => {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(file, dir);
    const filename = path
      .basename(file, path.extname(file))
      .replace(/\.mdx?$/, '');
    const slug = md5(filename);
    return {
      metadata,
      slug,
      content,
    };
  });
};

export const getBlogPosts = () => {
  const content = process.env.content || 'content';
  return getMDXData(path.join(process.cwd(), content));
};

export const getPostFromParams = (slug: string) =>
  getBlogPosts().find((post) => post.slug === slug);
