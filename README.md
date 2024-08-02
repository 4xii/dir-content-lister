
# directory-content-list

`directory-content-list` 是一个简单的Node.js命令行工具，它可以帮助你将当前目录及其所有子目录下的 `.ts` 文件的文件名和内容输出到一个文本文件中。这个工具特别适合于需要快速获取目录树中TypeScript文件概览的开发者。

## 安装

你可以通过npm来全局安装 `directory-content-list`：

```bash
npm install -g directory-content-list
```

这会将 `dcl` 命令添加到你的系统路径中，使其可以在任何目录下执行。

## 使用

安装完成后，你可以在任何你想要列出 `.ts` 文件内容的目录下执行 `dcl` 命令：

```bash
dcl
```

执行该命令将会遍历当前目录及其所有子目录，寻找所有的 `.ts` 文件，并将每个文件的相对路径和内容输出到当前目录下的 `output.txt` 文件中。

输出格式如下：

```
file1.ts
xxxx

file2.ts
xxxx

subdir/file3.ts
xxxx
```

其中，`xxxx` 表示文件的实际内容。

## 输出文件

默认情况下，所有内容都会被写入到当前工作目录下的 `output.txt` 文件中。如果该文件已存在，它会被覆盖。

## 注意

- 该工具仅支持 `.ts` 文件。如果你需要支持其他文件扩展名，你需要修改源代码。
- 由于文件读取是异步的，如果有大量文件，命令行的返回可能在所有文件都处理完之前就显示了。

## License

[MIT](./LICENSE)
