export default function formattedTime(created: string) {
  if (!created) return '1970-01-01';
  const year = created?.substring(0, 4);
  const month = created?.substring(4, 6);
  const day = created?.substring(6, 8);
  return `${year}-${month}-${day}`;
}
