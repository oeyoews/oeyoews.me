import slugify from 'slugify';

export default function slugifyTitle(title: string) {
  slugify.extend({ '/': '-' });
  return slugify(title, {
    replacement: '-', // replace spaces with replacement character, defaults to `-`
    lower: true,
    strict: true, // strip special characters except replacement, defaults to `false`, remove some unicode
    remove: /[*+~.()'"!:@]/g, // 这里不能正则替换, 仅仅提供了移除
    locale: 'zh',
    trim: true,
  });
}
