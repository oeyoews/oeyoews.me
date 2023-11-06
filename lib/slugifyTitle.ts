import slugify from 'slugify';

export default function slugifyTitle(title: string) {
  slugify.extend({ '/': '-' });
  const slugtitle = slugify(title, {
    replacement: '-', // replace spaces with replacement character, defaults to `-`
    lower: true,
    strict: true, // strip special characters except replacement, defaults to `false`, remove some unicode, 中文也会被移除
    remove: /[*+~.()'"!:@]/g, // 这里不能正则替换, 仅仅提供了移除
    locale: 'zh',
    trim: true,
  });
  if (!slugtitle.length) {
    return Math.random().toString(36).slice(2); // 刷新后就变化了
  }
  return slugtitle;
}
