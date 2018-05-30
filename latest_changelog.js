const slackifyMarkdown = require('./src/index');

const markdown = process.argv[2];
const result = slackifyMarkdown(markdown);
process.stdout.write(result);
