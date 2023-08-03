const prompts = require('prompts');
const fs = require('fs');

async function createArticle() {
  const response = await prompts([
    // 获取用户输入的目录名和标题
    {
      type: 'text',
      name: 'directoryName',
      message: '请输入目录名：',
      validate: (value) => {
        if (!/^[A-Za-z0-9-]+$/.test(value)) {
          return '目录名必须由字母组成';
        }
        if (fs.existsSync(`app/articles/${value}`)) {
          return '目录已存在，请重新输入';
        }
        return true;
      },
    },
    {
      type: 'text',
      name: 'title',
      message: '请输入标题：',
    },
  ]);

  const { directoryName, title } = response;

  // 创建page.mdx文件并写入内容
  const content = `export const metadata = {
  title: '${title}',
  date: '${getCurrentDate()}',
};`;

  // 创建目录
  if (directoryName) {
    fs.mkdirSync(`app/articles/${directoryName}`, { recursive: true });
    fs.writeFileSync(`app/articles/${directoryName}/page.mdx`, content);

    console.log(`${directoryName} 文章已成功创建！`);
  } else {
    console.log('文章创建失败!');
  }
}

function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

createArticle();
