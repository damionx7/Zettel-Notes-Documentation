# Zettel Notes Documentation

Rules for anyone editing these docs, human or AI.

Source for <https://www.zettelnotes.com>, the docs for the Zettel Notes Android app. Built with Zensical (`zensical build`, `zensical serve`); pages live in `docs/`, navigation and theme in `zensical.toml`.

## Structure rules

- Every page must be listed in `nav` in `zensical.toml`.
- Every page has frontmatter with `title` and `tags`. Reuse existing tags (see `docs/tags.md` output or other pages) before inventing new ones.
- Feature additions get a version badge linking to the changelog: `[v3.0.8](../changelog.md#308){ .zn-version }` (anchor is the version without dots).
- Do not edit `docs/changelog.md` content except to fix broken links; it is the source of truth for features.
- Do not touch `docs/csl-styles/`.

## Style rules

- Second person ("you"), neutral product voice; no first person except the homepage support section.
- Tap, not click. Long-press, not long press.
- Settings paths in backticks with `>`: `Settings > Editor and Viewer > Focus Mode`.
- UI labels in bold: tap **Save**.
- Product names: Zettel Notes, Git, GitHub, WebDAV, Nextcloud, LaTeX, BibTeX, F-Droid, Markdown, YAML, Android, Play Store, Termux, Pandoc.
- Admonitions: `!!! info`, `!!! tip`, `!!! note`, `!!! warning` only.
- Headings are nouns or tasks ("Restore a backup"), not questions; no space before `?`. Exception: the FAQ page uses question headings.
- Prefer tables for options/reference lists; numbered lists for steps.
- Code samples must be correct and copy-pasteable.

## Verification

- `zensical build` must report "No issues found".
- Internal links and `#anchors` must resolve in the built `site/`.
- When documenting from the changelog alone, say only what the changelog states and flag anything inferred in the PR description.
