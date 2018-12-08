/* eslint-disable import/max-dependencies */

/**
 * Remark-lint configuration for general writing.
 *
 * @type {Object}
 */
module.exports = {
  plugins: [
    require('remark-frontmatter'),

    // ----- Presets -----------------------------------------------------------
    require('remark-preset-lint-recommended'),
    require('remark-preset-lint-consistent'),

    // ----- Overrides ---------------------------------------------------------
    [require('remark-lint-list-item-indent'), 'space'], // eslint-disable-line import/no-extraneous-dependencies

    // ----- Built-In ----------------------------------------------------------
    require('remark-lint-checkbox-content-indent'),
    require('remark-lint-definition-spacing'),
    require('remark-lint-fenced-code-flag'),
    require('remark-lint-file-extension'),
    require('remark-lint-heading-increment'),
    require('remark-lint-linebreak-style'),
    require('remark-lint-maximum-heading-length'),
    require('remark-lint-maximum-line-length'),
    require('remark-lint-no-consecutive-blank-lines'),
    require('remark-lint-no-duplicate-headings-in-section'),
    require('remark-lint-no-emphasis-as-heading'),
    require('remark-lint-no-empty-url'),
    require('remark-lint-no-file-name-articles'),
    require('remark-lint-no-file-name-consecutive-dashes'),
    [require('remark-lint-no-file-name-irregular-characters'), '\\.a-zA-Z0-9-_'],
    require('remark-lint-no-file-name-outer-dashes'),
    require('remark-lint-no-heading-indent'),
    require('remark-lint-no-heading-like-paragraph'),
    require('remark-lint-no-heading-punctuation'),
    require('remark-lint-no-html'),
    require('remark-lint-no-multiple-toplevel-headings'),
    require('remark-lint-no-paragraph-content-indent'),
    require('remark-lint-no-reference-like-url'),
    require('remark-lint-no-shell-dollars'),
    require('remark-lint-no-table-indentation'),
    require('remark-lint-no-tabs'),
    require('remark-lint-ordered-list-marker-value'),
    require('remark-lint-table-pipe-alignment'),
    require('remark-lint-table-pipes'),
    require('remark-lint-unordered-list-marker-style'),

    // ----- External ----------------------------------------------------------
    require('remark-lint-heading-whitespace'),
    require('remark-lint-no-empty-sections'),
    require('remark-lint-no-url-trailing-slash'),
    require('remark-lint-write-good'),
  ],
}
