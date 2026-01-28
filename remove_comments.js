const fs = require('fs')
const path = require('path')

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.css']
const exclude = ['node_modules', '.next', '.git', 'dist', 'build']

function removeComments(content) {
  // Remove multi-line comments
  content = content.replace(/\/\*[\s\S]*?\*\//gm, '')
  // Remove single-line comments, preserving URLs (http:// or https://)
  // This regex looks for // that are NOT preceded by a colon
  content = content.replace(/(^|[^:])\/\/.*$/gm, '$1')
  return content
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    if (exclude.includes(file)) return

    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      processDirectory(fullPath)
    } else if (extensions.includes(path.extname(file))) {
      const content = fs.readFileSync(fullPath, 'utf8')
      const newContent = removeComments(content)
      if (content !== newContent) {
        // Remove empty lines created by comment removal if desired, but keeping it simple for now to avoid breaking code layout too much
        // However, extensive comment blocks leaves large gaps. Let's try to condense >2 newlines to 2.
        const cleaned = newContent.replace(/\n\s*\n\s*\n/g, '\n\n')
        fs.writeFileSync(fullPath, cleaned, 'utf8')
        console.log(`Processed: ${fullPath}`)
      }
    }
  })
}

const targetDir = process.argv[2] || '.'
console.log(`Removing comments in: ${targetDir}`)
processDirectory(targetDir)
console.log('Done.')
