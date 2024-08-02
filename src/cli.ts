import * as fs from 'fs'
import * as path from 'path'

const outputFilePath = path.join(process.cwd(), 'output.txt');

function listFilesAndContent(dir: string, parentPrefix = '') {
  fs.readdir(dir, { withFileTypes: true }, (err, dirents) => {
    if (err) {
      console.error('Error reading directory ' + dir, err);
      return;
    }

    dirents.forEach((dirent) => {
      const relPath = path.join(parentPrefix, dirent.name);

      if (dirent.isDirectory()) {
        // 如果是目录，则递归调用
        listFilesAndContent(path.join(dir, dirent.name), relPath + '/');
      } else if (path.extname(dirent.name) === '.ts') {
        // 如果是.ts文件，读取内容并写入输出文件
        const filePath = path.join(dir, dirent.name);
        fs.readFile(filePath, 'utf8', (err, content) => {
          if (err) {
            console.error('Error reading file ' + filePath, err);
            return;
          }
          // 将文件名和内容追加到输出文件
          fs.appendFileSync(outputFilePath, `${relPath}\n${content}\n\n`);
        });
      }
    });
  });
}

// 清空输出文件或创建一个新文件
fs.writeFileSync(outputFilePath, '');

// 开始从当前目录读取
listFilesAndContent(process.cwd());

console.log(`Files and contents have been written to ${outputFilePath}`);
