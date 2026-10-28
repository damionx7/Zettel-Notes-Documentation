# Zettel Notes Documentation

Source for the documentation site of [Zettel Notes](https://www.zettelnotes.com), a Markdown note-taking app for Android that stores every note as a plain-text file.

**Live site:** <https://www.zettelnotes.com>

## Download the app

- [Google Play Store](https://play.google.com/store/apps/details?id=org.eu.thedoc.zettelnotes)
- [F-Droid repository](https://thedoc.eu.org/fdroid/repo/)

## Build the docs locally

The site is built with [Zensical](https://zensical.org).

```sh
pip install -r requirements.txt
zensical serve      # live preview at http://localhost:8000
zensical build      # static site in ./site
```

Pages are Markdown files in `docs/`; navigation and theme settings are in `zensical.toml`. Pushes to `master` are deployed to GitHub Pages by the workflow in `.github/workflows/`.

## Contributing

- Use the **Edit** button on any page of the live site, or open a pull request against `docs/`.
- Report errors or request features in [Issues](https://github.com/damionx7/Zettel-Notes-Documentation/issues) or [Discussions](https://github.com/damionx7/Zettel-Notes-Documentation/discussions).
- Help translate the app at <https://translate.thedoc.eu.org/projects/zettel-notes/android/>.

When adding a page, add it to the `nav` list in `zensical.toml`.

## License

[GPL-3.0](LICENSE)
