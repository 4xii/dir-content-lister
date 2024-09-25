# directory-content-list

`directory-content-list` is a practical Node.js command-line tool designed for developers to quickly aggregate content from multiple files, facilitating context-rich conversations with AI assistants like GPT.

## Key Features

- Traverse the current directory and all its subdirectories
- Collect file contents with specified extensions (default is .ts)
- Output collected content to a file or clipboard
- Easily provide multi-file context to AI assistants

## Installation

Install `directory-content-list` globally:

```bash
npm install -g directory-content-list
```

After installation, the `dcl` command will be available in any directory.

## Usage

Execute in the target directory:

```bash
dcl [extension] [-c] [-oc]
```

Parameters:
- `[extension]`: Optional, specify the file extension to collect (without dot, e.g., ts, js). Defaults to .ts if not specified.
- `-c`: Optional, copy the result to the clipboard.
- `-oc`: Optional, only copy the result to the clipboard, without generating an output file.

Examples:
```bash
dcl js -c  # Collect all .js file contents, output to file and copy to clipboard
dcl -oc    # Collect all file contents, only copy to clipboard
```

## Output Format

```
File1 Path
File1 Content

File2 Path
File2 Content

...
```

## Use Cases

1. Code Review: Quickly collect relevant file contents for AI-assisted code review.
2. Problem Diagnosis: Gather multiple related files to provide AI assistants with a comprehensive context.
3. Refactoring Suggestions: Provide entire module or component file contents to AI for refactoring advice.
4. Documentation Generation: Collect multiple source file contents for AI-assisted project documentation.

## Notes

- By default, `node_modules`, `.git`, `dist`, and `build` directories are ignored.
- When using in large projects, be mindful of the output size, which may exceed AI assistant input limits.

## License

[MIT](./LICENSE)
