import fs from 'fs';
import path from 'path';

type Metadata = {
  title: string;
  date: string;
  summary: string;
  image?: string;
};

const parseFrontmatter = (fileContent: string) => {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
};

const getMDXFiles = (dir: any) => {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
};

const readMDXFile = (filePath: any) => {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
};

const getMDXData = (dir: any) => {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
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
