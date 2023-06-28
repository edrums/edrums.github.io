# E-Drums project Website

The website is built using the following software and technologies:

- [AnchorJS] anchors headings, MIT license
- [Bootstrap] UI toolkit, code under MIT license, docs under [Creative Commons]
- [Favicon Generator] for favicons
- [Font Awesome] for icons, [SIL OFL 1.1] license
- [highlight.js] for syntax highlighting, BSD 3-Clause license
- [Markdown] markup language
- [MKDocs] static website generator, BSD-2-Clause license
- [SASS] for stylesheets, MIT license

## Local Build Quick-start Guide

Install [poetry] and run:

```bash
$ poetry install
$ poetry run mkdocs serve
```

Use the automatic setup via `mkdocs.sh`

The local website should be available at <http://localhost:8000/>

## Creating posts

This can be done either manually by creating a new .md file
in the `docs/en/news/posts` directory, paying attention for a correct filename,
date and [front-matter], or by running the following command:

```bash
$ ./new_post.sh "New post title" "<author_name>"
```


[AnchorJS]:          https://www.bryanbraun.com/anchorjs/
[Bootstrap]:         https://getbootstrap.com/
[Creative Commons]:  https://creativecommons.org/licenses/by/3.0/
[Favicon Generator]: https://realfavicongenerator.net/
[Font Awesome]:      https://fontawesome.io/
[front-matter]:      https://www.mkdocs.org/user-guide/writing-your-docs/#meta-data
[highlight.js]:      https://highlightjs.org/
[Markdown]:          https://daringfireball.net/projects/markdown/
[MKDocs]:            https://www.mkdocs.org/
[poetry]:            https://python-poetry.org/
[SASS]:              https://sass-lang.com/
[SIL OFL 1.1]:       https://scripts.sil.org/cms/scripts/page.php?item_id=OFL
