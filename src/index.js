/* eslint-disable import/max-dependencies, import/no-extraneous-dependencies */

// ----- Parsers ---------------------------------------------------------------
import remarkGFM from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

// ----- Presets ---------------------------------------------------------------
import presetLintMarkdownStyleGuide from "remark-preset-lint-markdown-style-guide";
import presetLintRecommended from "remark-preset-lint-recommended";
import presetLintConsistent from "remark-preset-lint-consistent";

// ----- Overrides ---------------------------------------------------------
import ruleListItemIndent from "remark-lint-list-item-indent";
import ruleListItemSpacing from "remark-lint-list-item-spacing";
import ruleNoDuplicateHeadings from "remark-lint-no-duplicate-headings";
import ruleNoFileNameIrregularCharacters from "remark-lint-no-file-name-irregular-characters";
import ruleNoFileNameMixedCase from "remark-lint-no-file-name-mixed-case";

// ----- Built-In --------------------------------------------------------------
import ruleCheckboxContentIndent from "remark-lint-checkbox-content-indent";
// import ruleFirstHeadingLevel from "remark-lint-first-heading-level";
import ruleLinebreakStyle from "remark-lint-linebreak-style";
// import ruleNoDuplicateDefinedUrls from "remark-lint-no-duplicate-defined-urls";
import ruleNoDuplicateHeadingsInSection from "remark-lint-no-duplicate-headings-in-section";
import ruleNoEmptyUrl from "remark-lint-no-empty-url";
import ruleNoHeadingIndent from "remark-lint-no-heading-indent";
import ruleNoHeadingLikeParagraph from "remark-lint-no-heading-like-paragraph";
import ruleNoHtml from "remark-lint-no-html";
// import ruleNoMissingBlankLines from "remark-lint-no-missing-blank-lines";
import ruleNoParagraphContentIndent from "remark-lint-no-paragraph-content-indent";
import ruleNoReferenceLikeUrl from "remark-lint-no-reference-like-url";
import ruleNoTabs from "remark-lint-no-tabs";
import ruleNoUnneededFullReferenceImage from "remark-lint-no-unneeded-full-reference-image";
import ruleNoUnneededFullReferenceLink from "remark-lint-no-unneeded-full-reference-link";
import ruleStrikethroughMarker from "remark-lint-strikethrough-marker";

// ----- External ----------------------------------------------------------
import ruleMatchPunctuation from "remark-lint-match-punctuation";
import ruleNoEmptySections from "remark-lint-no-empty-sections";
import ruleNoRepeatPunctuation from "remark-lint-no-repeat-punctuation";
import ruleNoUrlTrailingSlash from "remark-lint-no-url-trailing-slash";
import ruleWriteGood from "remark-lint-write-good";

/* eslint-enable import/max-dependencies, import/no-extraneous-dependencies */

const config = {
  plugins: [
    remarkGFM,
    remarkFrontmatter,
    presetLintMarkdownStyleGuide,
    presetLintRecommended,
    presetLintConsistent,
    [ruleListItemIndent, "space"],
    [ruleListItemSpacing, false],
    [ruleNoDuplicateHeadings, false],
    [ruleNoFileNameIrregularCharacters, "\\.a-zA-Z0-9-_"],
    [ruleNoFileNameMixedCase, false],
    ruleCheckboxContentIndent,
    ruleLinebreakStyle,
    ruleNoDuplicateHeadingsInSection,
    ruleNoEmptyUrl,
    ruleNoHeadingIndent,
    ruleNoHeadingLikeParagraph,
    ruleNoHtml,
    ruleNoParagraphContentIndent,
    ruleNoReferenceLikeUrl,
    ruleNoTabs,
    ruleNoUnneededFullReferenceImage,
    ruleNoUnneededFullReferenceLink,
    ruleStrikethroughMarker,
    ruleMatchPunctuation,
    ruleNoEmptySections,
    ruleNoRepeatPunctuation,
    ruleNoUrlTrailingSlash,
    ruleWriteGood,
  ],
  settings: {
    bullet: "-",
    rule: "-",
    tightDefinitions: true,
  },
};

export default config;
