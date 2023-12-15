import tap from "tap";
import { remark } from "remark";
import config from "../src/index.js"; // eslint-disable-line import/extensions, import/no-relative-parent-imports

remark()
  .use(config)
  .process("A clean Markdown file.\n", (err, file) => {
    tap.equal(
      true,
      typeof err === "undefined",
      "It doesn't produce errors during processing",
    );
    tap.equal(file.messages.length, 0, "It passes valid Markdown");
  });

remark()
  .use(config)
  .process("A dirty Markdown file.", (_err, file) => {
    tap.equal(file.messages.length, 1, "It lints invalid Markdown");
  });

remark()
  .use(config)
  .process("---\nfront: 1\n---\n\n# Heading\n\nMarkdown.\n", (_err, file) => {
    tap.equal(file.messages.length, 0, "It ignores front matter in Markdown");
  });
