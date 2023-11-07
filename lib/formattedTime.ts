export default function formattedTime(created: string) {
  if (!created) return '1970-01-01'; // 如果输入的日期时间字符串为空，则返回默认值'1970-01-01'
  const parsedDate = new Date(
    `${created.slice(0, 4)}-${created.slice(4, 6)}-${created.slice(
      6,
      8,
    )}T${created.slice(8, 10)}:${created.slice(10, 12)}:${created.slice(
      12,
      14,
    )}`,
  );
  return parsedDate.toISOString().slice(0, 19).replace('T', ' '); // 返回符合ISO 8601标准的日期时间字符串，形如'YYYY-MM-DD HH:MM:SS'
}
