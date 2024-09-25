# directory-content-list

`directory-content-list` 是一个实用的 Node.js 命令行工具，专为开发者设计，用于快速聚合多个文件内容，以便于与 GPT 等 AI 助手进行上下文丰富的对话。

## 主要功能

- 遍历当前目录及其所有子目录
- 收集指定扩展名（默认为 .ts）的文件内容
- 将收集到的内容输出到文件或剪贴板
- 便于快速向 AI 助手提供多文件上下文

## 安装

全局安装 `directory-content-list`：

```bash
npm install -g directory-content-list
```

安装后，`dcl` 命令将可在任何目录下使用。

## 使用方法

在目标目录下执行：

```bash
dcl [扩展名] [-c] [-oc]
```

参数说明：
- `[扩展名]`：可选，指定要收集的文件扩展名（不包含点，如 ts、js）。不指定则默认收集 .ts 文件。
- `-c`：可选，将结果复制到剪贴板。
- `-oc`：可选，仅将结果复制到剪贴板，不生成输出文件。

示例：
```bash
dcl js -c  # 收集所有 .js 文件内容，输出到文件并复制到剪贴板
dcl -oc    # 收集所有文件内容，仅复制到剪贴板
```

## 输出格式

```
文件1路径
文件1内容

文件2路径
文件2内容

...
```

## 使用场景

1. 代码审查：快速收集相关文件内容，提供给 AI 进行代码审查。
2. 问题诊断：收集多个相关文件，让 AI 助手更全面地了解问题上下文。
3. 重构建议：将整个模块或组件的文件内容提供给 AI，获取重构建议。
4. 文档生成：收集多个源文件内容，让 AI 协助生成项目文档。

## 注意事项

- 默认忽略 `node_modules`、`.git`、`dist` 和 `build` 目录。
- 大型项目中使用时请注意输出内容的大小，可能超出 AI 助手的输入限制。

## License

[MIT](./LICENSE)