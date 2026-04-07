import fs from 'fs';
import md5 from 'md5';
import path from 'path';
import { getFrontmatter } from 'next-mdx-remote-client/utils';
import config from '~config';

export interface Post {
  metadata: Metadata;
  slug: string;
  content: string;
  type: 'md' | 'mdx';
}

export interface Metadata {
  title: string;
  date: string;
  summary?: string;
  image?: string;
  password?: string;
  draft?: boolean | string;
}

const getDefaultDate = (filePath: string): string => {
  const stats = fs.statSync(filePath);
  return new Date(stats.birthtime).toLocaleString();
};

const parseFrontmatter = (fileContent: string, fileName: string, filePath: string) => {
  const defaultDate = getDefaultDate(filePath);
  const defaultTitle = fileName.replace(/\.mdx?$|\.md$/, '');
  const { frontmatter, strippedSource } = getFrontmatter<Partial<Metadata>>(fileContent);
  const metadata: Metadata = {
    title: typeof frontmatter.title === 'string' ? frontmatter.title : defaultTitle,
    date:
      typeof frontmatter.date === 'string' || typeof frontmatter.date === 'number'
        ? String(frontmatter.date)
        : defaultDate,
    summary: frontmatter.summary,
    image: frontmatter.image,
    password: frontmatter.password,
    draft: frontmatter.draft
  };

  if (!frontmatter.title || !frontmatter.date) {
    console.warn(`检测到 ${filePath} frontmatter 字段不完整，已使用默认值回退`);
  }

  return {
    metadata,
    content: strippedSource.trim()
  };
};

const getMDXFilesRecursive = (dir: string): string[] => {
  let mdxFiles: string[] = [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const isDirectory = fs.statSync(filePath).isDirectory();

    if (isDirectory) {
      // Recursively get MDX files from subdirectories
      mdxFiles = mdxFiles.concat(getMDXFilesRecursive(filePath));
    } else if (path.extname(file) === '.mdx' || path.extname(file) === '.md') {
      mdxFiles.push(filePath);
    }
  });

  return mdxFiles;
};

const readMDXFile = (filePath: string) => {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent, path.basename(filePath), filePath);
};

const getMDXData = (dir: string): Post[] => {
  if (!fs.existsSync(dir)) {
    console.log('无法找到目录', dir);
    return [];
  }
  const mdxFiles = getMDXFilesRecursive(dir);
  return mdxFiles.map((filePath) => {
    const { metadata, content } = readMDXFile(filePath);
    const filename = path.basename(filePath, path.extname(filePath));
    return {
      metadata,
      type: path.extname(filePath) === '.mdx' ? 'mdx' : 'md',
      slug: md5(filename).slice(0, config.md5Length),
      content
    };
  });
};

export const getBlogPosts = (dir: string = config.content) => {
  return getMDXData(path.join(process.cwd(), dir));
};

export const getPostFromParams = (slug: string) =>
  getBlogPosts().find((post) => post.slug === slug);
