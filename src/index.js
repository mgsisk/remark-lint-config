/**
 * Remark-lint configuration for general writing.
 *
 * @type {object}
 */
module.exports = {
  plugins: [
    /* eslint-disable capitalized-comments, import/max-dependencies */
    require('remark-frontmatter'),

    // ----- Presets -----------------------------------------------------------
    require('remark-preset-lint-markdown-style-guide'),
    require('remark-preset-lint-recommended'),
    require('remark-preset-lint-consistent'),

    // ----- Overrides ---------------------------------------------------------
    /* eslint-disable import/no-extraneous-dependencies */
    [require('remark-lint-list-item-indent'), 'space'],
    [require('remark-lint-list-item-spacing'), false],
    [require('remark-lint-no-duplicate-headings'), false],
    [require('remark-lint-no-file-name-irregular-characters'), '\\.a-zA-Z0-9-_'],
    [require('remark-lint-no-file-name-mixed-case'), false],
    /* eslint-enable import/no-extraneous-dependencies */

    // ----- Built-In ----------------------------------------------------------
    require('remark-lint-checkbox-content-indent'),
    // require('remark-lint-first-heading-level'),
    require('remark-lint-linebreak-style'),
    // require('remark-lint-maximum-heading-length'),
    // require('remark-lint-no-duplicate-defined-urls'),
    require('remark-lint-no-duplicate-headings-in-section'),
    require('remark-lint-no-empty-url'),
    require('remark-lint-no-heading-indent'),
    require('remark-lint-no-heading-like-paragraph'),
    require('remark-lint-no-html'),
    // require('remark-lint-no-missing-blank-lines'),
    require('remark-lint-no-paragraph-content-indent'),
    require('remark-lint-no-reference-like-url'),
    require('remark-lint-no-tabs'),
    require('remark-lint-no-unneeded-full-reference-image'),
    require('remark-lint-no-unneeded-full-reference-link'),

    // ----- External ----------------------------------------------------------
    require('remark-lint-heading-whitespace'),
    require('remark-lint-no-empty-sections'),
    require('remark-lint-no-url-trailing-slash'),
    require('remark-lint-write-good'),
    /* eslint-enable capitalized-comments, import/max-dependencies */
  ],
}
