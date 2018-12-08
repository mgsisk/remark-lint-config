const tap = require('tap')
const remark = require('remark') // eslint-disable-line import/no-extraneous-dependencies
const config = require('../index.js')

remark().use(config)
  .process('A clean Markdown file.\n', (err, file)=> {
    tap.equal(err, null, "It doesn't produce errors during processing")
    tap.equal(file.messages.length, 0, 'It passes valid Markdown')
  })

remark().use(config)
  .process('A dirty Markdown file.', (_err, file)=> {
    tap.equal(file.messages.length, 1, 'It lints invalid Markdown')
  })

remark().use(config)
  .process('---\nfront: 1\n---\n\n# Heading\n\nMarkdown.\n', (_err, file)=> {
    tap.equal(file.messages.length, 0, 'It ignores front matter in Markdown')
  })
