export default function formatTitle(title: string) {
  return title.replace(/[-_/:]/g, ' ');
}
