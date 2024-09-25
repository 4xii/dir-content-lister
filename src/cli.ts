import * as fs from 'fs'
import * as path from 'path'
import clipboard from 'clipboardy'

const outputFilePath = path.join(process.cwd(), 'output.txt');

// 定义要忽略的目录和文件
const ignoredPaths = ['node_modules', '.git', 'dist', 'build'];

function listFilesAndContent(dir: string, extensions: string[], parentPrefix = '') {
  let output = '';

  const dirents = fs.readdirSync(dir, { withFileTypes: true });

  for (const dirent of dirents) {
    const relPath = path.join(parentPrefix, dirent.name);

    // 检查是否应该忽略这个路径
    if (ignoredPaths.some(ignoredPath => relPath.includes(ignoredPath))) {
      continue;
    }

    if (dirent.isDirectory()) {
      // 如果是目录，则递归调用
      output += listFilesAndContent(path.join(dir, dirent.name), extensions, relPath + '/');
    } else if (dirent.isFile() && (extensions.length === 0 || extensions.includes(path.extname(dirent.name).slice(1)))) {
      // 如果是文件，并且没有指定扩展名或者文件扩展名匹配，则读取内容
      const filePath = path.join(dir, dirent.name);
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        output += `${relPath}\n${content}\n\n`;
      } catch (error) {
        console.error(`无法读取文件 ${filePath}: ${error}`);
      }
    }
  }

  return output;
}

// 解析命令行参数
const args = process.argv.slice(2);
const extensions = args.filter(arg => !arg.startsWith('-'));
const copyToClipboard = args.includes('c') || args.includes('oc');
const onlyClipboard = args.includes('oc');

// 获取文件内容
const content = listFilesAndContent(process.cwd(), extensions);

if (!onlyClipboard) {
  // 写入输出文件
  fs.writeFileSync(outputFilePath, content);
  console.log(`文件内容已写入 ${outputFilePath}`);
}

if (copyToClipboard) {
  // 复制到剪贴板
  clipboard.writeSync(content);
  console.log('文件内容已复制到剪贴板');
}

if (!copyToClipboard && !onlyClipboard) {
  console.log(content);
}
